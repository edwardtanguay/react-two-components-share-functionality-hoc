import employees from '../data/employees.json';

// TODO: make it possible to wrap the API call with a TimeOut for testing purposes

const loadData = async (url) => {
	const response = await fetch(url);
	return await response.json();
}

const getLocalUK = () => {
	return employees.filter(emp => emp.address.country === 'UK');
}

const getLocalUSA = () => {
	return employees.filter(emp => emp.address.country === 'USA');
}

export const dataManager = Component => {
	return (props) => {
		return <Component {...props} getLocalUK={getLocalUK} getLocalUSA={getLocalUSA} employees={employees} loadData={loadData} />
	}
}