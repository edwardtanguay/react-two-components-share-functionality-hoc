import { useState, useEffect } from 'react';
// TODO: make it possible to wrap the API call with a TimeOut for testing purposes

// TODO: timeout with api call: https://dev.to/reenydavidson/settimeout-in-useeffect-api-call-data-fetching-j33

// TODO: implement env variables

const url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json';

const Loading = ({ message }) => {
	return (
		<>
			<h2>{message}</h2>
			{/* <p><FaSpinner className="spinner" /></p> */}
		</>
	)
};

const loadData = async (url) => {
	const response = await fetch(url);
	return await response.json();
}

const fetchData = async () => {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	return data;
};

export const apiDataManager = Component => (props) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const data = await response.json();
			setData(data);
		})();
	}, []);
	return !data ? <Loading/> : <Component {...props} customers={data} />
}