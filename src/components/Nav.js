import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = ({ config }) => {
	const getBackgroundColor = () => {
		switch (config.environment) {
			case 'development':
				return '#e0e537';
			case 'testing':
				return '#f47c50';
			default:
				return '#eee';
		}
	}

	const SiteMessage = styled.div`
background: ${getBackgroundColor()};
margin: 0 0 5px 0;
font-size: 1rem;
padding: 2px;
border-radius: 3px;
text-align: center;
font-variant: small-caps;
`;

	return (
		<>
			{config.environment !== 'production' && (
				<SiteMessage>{config.environment}</SiteMessage>
			)}
			<nav>
				<ul>
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="employees">Employees</NavLink></li>
					<li><NavLink to="customers">Customers</NavLink></li>
				</ul>
			</nav>
		</>
	)
}

export default Nav;