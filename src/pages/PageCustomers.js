const PageCustomers = ({InfoBox, customers}) => {
	return (
		<>
			<h1>{customers.length} Customers</h1>
			<p>This is the customer page.</p>
			<InfoBox/>
		</>
	)
}

export default PageCustomers;