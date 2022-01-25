/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';


const PageCustomers = ({ InfoBox, customers}) => {
	console.log('nnn', customers);
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

PageCustomers.apiData = ['customers', 'employees', 'yearlyReport'];
export default PageCustomers;