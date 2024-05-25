import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Pages/Layout/layout';
import App from './App.jsx';
import { Vehicles } from './Pages/Vehicles/vehicles.jsx';
import { Drivers } from './Pages/Drivers/drivers.jsx';
import { Bookings } from './Pages/Bookings/bookings.jsx';
import { Users } from './Pages/Users/users.jsx';
import { Customers } from './Pages/Customers/customers.jsx';
import { Reports } from './Pages/Reports/reports.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<App />} />
				</Route>
				<Route path='/vehicles' element={<Layout />}>
					<Route index element={<Vehicles />} />
				</Route>
				<Route path='/drivers' element={<Layout />}>
					<Route index element={<Drivers />} />
				</Route>
				<Route path='/bookings' element={<Layout />}>
					<Route index element={<Bookings />} />
				</Route>
				<Route path='/users' element={<Layout />}>
					<Route index element={<Users />} />
				</Route>
				<Route path='/customers' element={<Layout />}>
					<Route index element={<Customers />} />
				</Route>
				<Route path='/reports' element={<Layout />}>
					<Route index element={<Reports />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
