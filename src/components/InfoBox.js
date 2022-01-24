import styled from 'styled-components';

const Container = styled.div`
	color: brown;
	background: tan;
	font-family:'Courier New', Courier, monospace;
	padding: 10px;
	width: ${props => props.width ? props.width : '200px'};
`;

const Header = styled.h2`
	background-color: ${props => props.status === 'warning' ? 'red !important' : '#333 !important'};
`;

export const InfoBox = ({ content, status, width }) => {
	return (
		<Container width={width}>
			<Header status={status}>Info</Header>
			<div className="body">{content}</div>
		</Container >
	)
}
