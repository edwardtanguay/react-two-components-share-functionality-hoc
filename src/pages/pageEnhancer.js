import employees from '../data/employees.json';

const addNumbers = (a, b) => {
	return a + b;
}

const getLocalUK = () => {
	return employees.filter(emp => emp.address.country === 'UK');
}

const getLocalUSA = () => {
	return employees.filter(emp => emp.address.country === 'USA');
}

export const pageEnhancer = Component => {
	return (props) => {
		return <Component {...props} addNumbers={addNumbers} getLocalUK={getLocalUK} getLocalUSA={getLocalUSA} />
	}
}