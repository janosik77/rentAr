import Nav from 'react-bootstrap/Nav';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Col, NavDropdown, Row } from 'react-bootstrap';

export const Layout = () => {

	return (
		<div className='app'>
			<Navbar expand='xl'>
				<Link to='/'>
					<img className='logo' src='/images/logo.png'></img>
				</Link>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<div className='user-bar d-xl-none'>
						<div className='user-control'>
							<div className='user'>
								<p className='user-name'>
									Signed in as:{' '}
									<b>
										<Link href='#login'>Jan Kowalski</Link>
									</b>
								</p>
								<img src='/images/user.png' className='p-2'></img>
							</div>
							<div className='control-icons row'>
								<div className='control-icons-item col'>
									<img
										src='/images/icons/nav-icons/msg.svg'
										className='p-2'
									></img>
								</div>
								<div className='control-icons-item col'>
									<img
										src='/images/icons/nav-icons/notification.svg'
										className='p-2'
									></img>
								</div>
								<div className='control-icons-item col'>
									<img
										src='/images/icons/nav-icons/logout.svg'
										className='p-2'
									></img>
								</div>
							</div>
						</div>
					</div>
					<Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '600px' }}>
						<Nav.Link>
							<NavLink to='/' className='d-block'>
								Home
							</NavLink>
						</Nav.Link>
						<NavDropdown title='Manage' id='basic-nav-dropdown'>
							<NavDropdown.Item>
								<NavLink to='/vehicles' className='d-block'>
									Vehicles
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink to='/drivers' className='d-block'>
									Drivers
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink to='/users' className='d-block'>
									Users
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink to='/customers' className='d-block'>
									Customers
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<NavLink to='/bookings' className='d-block'>
									Bookings
								</NavLink>
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link>
							<NavLink to='/reports' className='d-block'>
								Reports
							</NavLink>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
                <div className='user-bar d-none d-xl-flex'>
						<div className='user-control'>
							<div className='user'>
								<p className='user-name'>
									Signed in as:{' '}
									<b>
										<Link href='#login'>Jan Kowalski</Link>
									</b>
								</p>
								<img src='/images/user.png' className='p-2'></img>
							</div>
							<div className='control-icons row'>
								<div className='control-icons-item col'>
									<img
										src='/images/icons/nav-icons/msg.svg'
										className='p-2'
									></img>
								</div>
								<div className='control-icons-item col'>
									<img
										src='/images/icons/nav-icons/notification.svg'
										className='p-2'
									></img>
								</div>
								<div className='control-icons-item col'>
									<img
										src='/images/icons/nav-icons/logout.svg'
										className='p-2'
									></img>
								</div>
							</div>
						</div>
					</div>
			</Navbar>
			<div>
				<Outlet />
			</div>
			<footer className='footer'>
				<h3>Support center</h3>
				<Row className='footer-contact justify-content-center'>
					<Col className='footer-item'>
						<img
							src='.\public\images\icons\map-marker.svg'
							alt='ikona geomarkera'
						/>
						<h5>adress</h5>
						<p>Love Street. Washington USA</p>
					</Col>
					<Col className='footer-item'>
						<img
							src='.\public\images\icons\chat.svg'
							alt='ikona chmurek czatu'
						/>
						<h5>email</h5>
						<p>project@wsb-nlu.com</p>
					</Col>
					<Col className='footer-item'>
						<img src='.\public\images\icons\phone.svg' alt='ikona telefonu' />
						<h5>phone</h5>
						<p>0212 123 45 67</p>
					</Col>
				</Row>
				<div className='underline'></div>
				<Row className='footer-copyright'>
					<p>
						<b>Copyright &copy;2021 | Designed by Sylwester Kubeł</b>
					</p>
				</Row>
			</footer>
		</div>
	);
};
