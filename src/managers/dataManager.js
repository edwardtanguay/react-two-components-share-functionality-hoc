/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
// TODO: make it possible to wrap the API call with a TimeOut for testing purposes

// TODO: timeout with api call: https://dev.to/reenydavidson/settimeout-in-useeffect-api-call-data-fetching-j33

// TODO: implement env variables

// dev variables
const secondsWaitToEmulate = 1;

const url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json';

const Loading = ({ message }) => {
	return (
		<>
			<h2>{message}</h2>
			{/* <p><FaSpinner className="spinner" /></p> */}
		</>
	)
};

const fetchCustomers = async () => {
	const response = await fetch(url);
	return await response.json();
}

export const dataManager = Component => (props) => {
	const [customers, setCustomers] = useState(null);
	const [employees, setEmployees] = useState(null);

	console.log(Component.name);

	// EMPLOYEE FUNCTIONS
	// CUSTOMER FUNCTIONS
	const getUkCustomers = () => {
		return customers.filter(emp => emp.address.country === 'UK');
	}

	useEffect(() => {
		setTimeout(async () => {
			if (Component.name === 'PageCustomers') {
				setCustomers(await fetchCustomers());
			}
			if (Component.name === 'PageEmployees') {
				setEmployees(employees);
			}
		}, secondsWaitToEmulate * 1000);
	}, []);

	if (Component.name === 'PageCustomers') {
		return !customers ? <Loading /> : <Component {...props} customers={customers} ukCustomers={getUkCustomers()} />
	}
}