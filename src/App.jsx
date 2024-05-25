import './App.css';
import { Bookings } from './Pages/Bookings/bookings';
import { Customers } from './Pages/Customers/customers';
import { Drivers } from './Pages/Drivers/drivers';
import { Home } from './Pages/Home/Home';
import { Layout } from './Pages/Layout/layout';
import { Reports } from './Pages/Reports/reports';
import { Users } from './Pages/Users/users';
import { Vehicles } from './Pages/Vehicles/vehicles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/vehicles',
				element: <Vehicles />,
			},
			{
				path: '/drivers',
				element: <Drivers />,
			},
			{
				path: '/bookings',
				element: <Bookings />,
			},
			{
				path: '/users',
				element: <Users />,
			},
			{
				path: '/customers',
				element: <Customers />,
			},
			{
				path: '/reports',
				element: <Reports />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} ></RouterProvider>;
}

export default App;
