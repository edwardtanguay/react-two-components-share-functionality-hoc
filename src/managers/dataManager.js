// TODO: make it possible to wrap the API call with a TimeOut for testing purposes
// TODO: implement env variables
/* eslint-disable react-hooks/exhaustive-deps */

import _employees from '../data/employees.json';
import { useState, useEffect } from 'react';
import { PageLoader } from '../components/PageLoader';

// dev variables
const pageWaitingEmulationInSeconds = 3;

const url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json';

const fetchCustomers = async () => {
	const response = await fetch(url);
	return await response.json();
}

export const dataManager = Component => (props) => {
	const [customers, setCustomers] = useState(null);
	const [employees, setEmployees] = useState(_employees);

	console.log(Component.name);

	// EMPLOYEE FUNCTIONS
	const getUkEmployees = () => {
		return employees.filter(emp => emp.address.country === 'UK');
	}

	const getUsaEmployees = () => {
		return employees.filter(emp => emp.address.country === 'USA');
	}

	// CUSTOMER FUNCTIONS
	const getUkCustomers = () => {
		return customers.filter(emp => emp.address.country === 'UK');
	}

	useEffect(() => {
		setTimeout(async () => {
			if (Component.name === 'PageEmployees') {
				setEmployees(employees);
			}
			if (Component.name === 'PageCustomers') {
				setCustomers(await fetchCustomers());
			}
		}, pageWaitingEmulationInSeconds * 1000);
	}, []);

	if (Component.name === 'PageEmployees') {
		return <Component {...props} ukEmployees={getUkEmployees()} usaEmployees={getUsaEmployees()} />
	}
	if (Component.name === 'PageCustomers') {
		return !customers ? <PageLoader /> : <Component {...props} customers={customers} ukCustomers={getUkCustomers()} />
	}
}