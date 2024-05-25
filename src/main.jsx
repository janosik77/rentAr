/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Pages/Layout/layout';
import App from './App.jsx';
import { Vehicles } from './Pages/Vehicles/vehicles.jsx';
import { Drivers } from './Pages/Drivers/drivers.jsx';
import { Bookings } from './Pages/Bookings/bookings.jsx';
import { Users } from './Pages/Users/users.jsx';
import { Customers } from './Pages/Customers/customers.jsx';
import { Reports } from './Pages/Reports/reports.jsx';

const router = createBrowserRouter([
   {
	   element: <Layout/>,
	   children: [
		   {
			   path: '/',
			   element: <App/>,
		   },
		   {
			   path: '/vehicles',
			   element: <Vehicles/>,
		   },
		   {
			   path: '/drivers',
			   element: <Drivers/>,
		   },
		   {
			   path: '/bookings',
			   element: <Bookings/>,
		   },
		   {
			   path: '/users',
			   element: <Users/>,
		   },
		   {
			   path: '/customers',
			   element: <Customers/>,
		   },
		   {
			   path: '/reports',
			   element: <Reports/>,
		   },
		   
	   ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
