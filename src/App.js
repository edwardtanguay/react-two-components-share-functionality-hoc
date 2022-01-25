import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import _PageHome from './pages/PageHome';
import _PageEmployees from './pages/PageEmployees';
import _PageCustomers from './pages/PageCustomers';
// import { apiDataManager } from './managers/apiDataManager';
import { localDataManager } from './managers/localDataManager';
import { siteManager } from './managers/siteManager';

const PageHome = siteManager(_PageHome);
const PageEmployees = siteManager(localDataManager(_PageEmployees)); 
// const PageCustomers = siteManager(apiDataManager(_PageCustomers)); 

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="content">
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="employees" element={<PageEmployees />} />
					{/* <Route path="customers" element={<PageCustomers />} /> */}
				</Routes>
			</div>
		</div>
	);
}

export default App;
