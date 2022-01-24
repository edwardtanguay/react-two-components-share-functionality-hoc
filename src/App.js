import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import PageHome from './pages/PageHome';
import PageEmployees from './pages/PageEmployees';
import PageCustomers from './pages/PageCustomers';
import { dataManager } from './managers/dataManager';
import { siteManager } from './managers/siteManager';

const EnhancedPageEmployees = siteManager(dataManager(PageEmployees)); 
const EnhancedPageHome = siteManager(PageHome);

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="content">
				<Routes>
					<Route path="/" element={<EnhancedPageHome />} />
					<Route path="employees" element={<EnhancedPageEmployees />} />
					<Route path="customers" element={<PageCustomers />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
