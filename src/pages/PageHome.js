const PageHome = ({InfoBox, employees, customers}) => {
	return (
		<>
			<h1>Welcome to this site.</h1>
			<p>We currently have {employees.length} employees and {customers.length} customers.</p>
			<InfoBox message="125 new registrations since January 1st." allowClosing="true"/>
			<InfoBox message="The sales department will be closed on Monday." allowClosing="true"/>
		</>
	)
}

export default PageHome;