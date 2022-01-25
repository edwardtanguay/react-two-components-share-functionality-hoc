/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const PageCustomers = ({ InfoBox, loadData }) => {
	const [customers, setCustomers] = useState([]);

	useEffect(async () => {
		const _customers = await loadData('https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json');
		setCustomers([..._customers]);
	}, []);

	return (
		<>
			<h1>{customers.length} Customers</h1>
			<p>This is the customer page.</p>
			<InfoBox title="Missing Data" status="warning">
				<p>Note that some customer information will not be available until next Monday.</p>
			</InfoBox>
		</>
	)
}

export default PageCustomers;