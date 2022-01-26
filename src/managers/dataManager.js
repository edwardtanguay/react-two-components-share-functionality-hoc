/* eslint-disable react-hooks/exhaustive-deps */

import _employees from '../data/employees.json';
import { useState, useEffect } from 'react';
import { PageLoader } from '../components/PageLoader';

// dev variables
const pageWaitingEmulationInSeconds = 0;

const url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json';

const fetchCustomers = async () => {
	const response = await fetch(url);
	return await response.json();
}

export const dataManager = Component => (props) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [customers, setCustomers] = useState(null);
	const [employees, setEmployees] = useState(_employees);

	const getUkEmployees = () => {
		return employees.filter(emp => emp.address.country === 'UK');
	}

	const getUsaEmployees = () => {
		return employees.filter(emp => emp.address.country === 'USA');
	}

	const getUkCustomers = () => {
		return customers.filter(emp => emp.address.country === 'UK');
	}

	useEffect(() => {
		setTimeout(async () => {
			setEmployees(employees);
			setCustomers(await fetchCustomers());
			setDataLoaded(true);
		}, pageWaitingEmulationInSeconds * 1000);
	}, []);

	return !dataLoaded ? <PageLoader /> : <Component {...props} ukEmployees={getUkEmployees()} usaEmployees={getUsaEmployees()} customers={customers} ukCustomers={getUkCustomers()} />
}