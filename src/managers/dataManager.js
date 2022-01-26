/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { PageLoader } from '../components/PageLoader';
import { config } from '../config';

const dataSources = config.getDataSources();

const _employees = dataSources.employees.startsWith('http') ? [] : require(`../data/${dataSources.employees}`);
const _customers = dataSources.customers.startsWith('http') ? [] : require(`../data/${dataSources.customers}`);

// dev variables
const pageWaitingEmulationInSeconds = 0;

const fetchData = async (url) => {
	const response = await fetch(url);
	return await response.json();
}

export const dataManager = Component => (props) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [employees, setEmployees] = useState(_employees);
	const [customers, setCustomers] = useState(_customers);

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
			if (dataSources.employees.startsWith('http')) {
				setEmployees(await fetchData(dataSources.employees));
			}
			if (dataSources.customers.startsWith('http')) {
				setCustomers(await fetchData(dataSources.customers));
			}
			setDataLoaded(true);
		}, pageWaitingEmulationInSeconds * 1000);
	}, []);

	return !dataLoaded ? <PageLoader /> : <Component {...props} ukEmployees={getUkEmployees()} usaEmployees={getUsaEmployees()} employees={employees} customers={customers} ukCustomers={getUkCustomers()} />
}