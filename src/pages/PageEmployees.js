const PageEmployees = ({getLocalUK, getLocalUSA, InfoBox}) => {

	const ukEmployees = getLocalUK();
	const usaEmployees = getLocalUSA();

	return (
		<>
			<h1>Employees</h1>
			<p>This is the customer page.</p>
			<h2>UK Employees</h2>
			<ul>
			{ukEmployees.map((emp,i) => {
				return (
					<li key={i}>{emp.firstName} {emp.lastName}</li>
				)
			})}
			</ul>
			<h2>USA Employees</h2>
			<ul>
			{usaEmployees.map((emp,i) => {
				return (
					<li key={i}>{emp.firstName} {emp.lastName}</li>
				)
			})}
			</ul>
			<h2>Example of component from parent</h2>
			<InfoBox content="This should work." status="normal" width="50%"/>
		</>
	)
}

export default PageEmployees;