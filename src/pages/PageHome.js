const PageHome = ({ InfoBox, employees, customers, config }) => {
	return (
		<>
			<h1>Welcome to this site.</h1>
			<p>We currently have {employees.length} employees and {customers.length} customers.</p>
			<InfoBox message="125 new registrations since January 1st." allowClosing="true" />
			<InfoBox message="The sales department will be closed on Monday." allowClosing="true" />
			{config.getCurrentEnvironmentIdCode() !== 'production' && (
				<div className="onlineVersion">
					<p>see the <a href="https://react-two-components-share-functionality-hoc.netlify.app">online/production version of this app</a></p>
				</div>
			)}
		</>
	)
}

export default PageHome;