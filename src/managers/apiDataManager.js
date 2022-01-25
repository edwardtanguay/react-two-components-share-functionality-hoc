// TODO: make it possible to wrap the API call with a TimeOut for testing purposes

// const env = 'dev';

const Loading = ({message}) => {
    return (
        <>
            <h2>{message}</h2>
            {/* <p><FaSpinner className="spinner" /></p> */}
        </>
    )
};

const loadData = async (url) => {
	const response = await fetch(url);
	return await response.json();
}

export const apiDataManager = Component => {
	return (props) => {
		return <Component {...props} loadData={loadData} />
	}
}