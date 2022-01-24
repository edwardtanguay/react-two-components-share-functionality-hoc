const InfoBox = (props) => {
	return (
		<div className="info">
			<div className="header">Info</div>
			<div className="body">{props.content}</div>
		</div>
	)
}

const PageCustomers = () => {
	return (
		<>
			<h1>Customers</h1>
			<p>This is the customer page.</p>
			<InfoBox content ="ok"/>
		</>
	)
}

export default PageCustomers;