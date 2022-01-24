import styled from 'styled-components';

const Container = styled.div`
	background: #aaa;
	border-radius: 5px;
	font-family:'Courier New', Courier, monospace;
	padding: 10px;
	margin: 20px 0 10px 0;
	width: ${props => props.width};
	box-shadow: 0 4px 8px 0 black;
`;

const Title = styled.div`
	background-color: ${props => props.status === 'warning' ? 'tomato !important' : '#888 !important'};
	font-size: 1.2rem;
	padding: 5px;
	border-radius: 5px;
	font-weight: bold;
	margin: 10 0 5px 0;
`;

const Body = styled.div`
	font-size: 1rem;
	margin: 10px 0 0 0;
`;

export const InfoBox = ({ children, status, width = '300px', title="Info" }) => {
	return (
		<Container className="infoBox" width={width}>
			<Title status={status}>{title}</Title>
			<Body>{children === undefined ? 'Currenly no information.' : children}</Body>
		</Container >
	)
}
