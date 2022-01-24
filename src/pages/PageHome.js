const PageHome = ({InfoBox}) => {
	return (
		<>
			<p>Welcome to this site.</p>
			<InfoBox message="125 new registrations since January 1st." allowClosing="true"/>
			<InfoBox message="The sales department will be closed on Monday." allowClosing="true"/>
		</>
	)
}

export default PageHome;