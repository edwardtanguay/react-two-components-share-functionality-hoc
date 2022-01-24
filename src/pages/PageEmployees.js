const PageEmployees = ({addNumbers, getLocalUK, getLocalUSA}) => {

	const sum = addNumbers(1, 2);
	const ukEmployees = getLocalUK();
	const usaEmployees = getLocalUSA();

	return (
		<>
			<h1>Employees</h1>
			<p>This is the customer page.</p>
			<p>The sum is: {sum}</p>
			<h2>UK Employees</h2>
			<ul>
			{ukEmployees.map(emp => {
				return (
					<li>{emp.firstName} {emp.lastName}</li>
				)
			})}
			</ul>
			<h2>USA Employees</h2>
			<ul>
			{usaEmployees.map(emp => {
				return (
					<li>{emp.firstName} {emp.lastName}</li>
				)
			})}
			</ul>
		</>
	)
}

export default PageEmployees;