import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AdminHome from './pages/Home';
import AdminLoginForm from './pages/Login';
import AdminNavLayout from './layouts/AdminNavLayout';
import AdminUsers from './pages/Users';
import AdminSettings from './pages/Settings';
import AdminTools from './pages/Tools';
import AdminTerms from './pages/Terms';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='login' element={<AdminLoginForm />} />
				<Route path='/' element={<AdminNavLayout />}>
					<Route index element={<AdminHome />} />
					<Route path='users' element={<AdminUsers />} />
					<Route path='settings' element={<AdminSettings />} />
					<Route path='tools' element={<AdminTools />} />
					<Route path='terms' element={<AdminTerms />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
