import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import PageHome from './pages/PageHome';
import PageEmployees from './pages/PageEmployees';
import PageCustomers from './pages/PageCustomers';
import { pageEnhancer } from './pages/pageEnhancer';

const EnhancedPageEmployees = pageEnhancer(PageEmployees); 

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="content">
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="employees" element={<EnhancedPageEmployees />} />
					<Route path="customers" element={<PageCustomers />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
