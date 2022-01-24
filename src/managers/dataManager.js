import employees from '../data/employees.json';

const getLocalUK = () => {
	return employees.filter(emp => emp.address.country === 'UK');
}

const getLocalUSA = () => {
	return employees.filter(emp => emp.address.country === 'USA');
}

export const dataManager = Component => {
	return (props) => {
		return <Component {...props} getLocalUK={getLocalUK} getLocalUSA={getLocalUSA} />
	}
}