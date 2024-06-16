import { Col, Form, Row } from 'react-bootstrap';
import data from '../../../public/data/data.json';
import { CustomersBookingTable } from './customerbookingsTable';
import './customers.css';
import { useState } from 'react';
import SearchCustomer from './SearchCustomer';

function CustomersRightPanel() {
	const customers = data.customers;
	const [searchText, setSearchText] = useState('');

	return (
		<div className='dashboard-tab-holder col-12 col-md-12 col-lg-7 col-xl-8 col-xxl-8'>
			<div className='tab-box'>
				<div className='tab-container'>
					<div className='right-panel user-details col-12  col-xxl-10'>
						<Row className='mb-4'>
							<Col>
								<h2>Customer</h2>
							</Col>
							<Col xs='auto' lg={3}>
								{/* <Form.Control type="text" placeholder="Search" className=" mr-sm-2" /> */}
								<SearchCustomer
									searchText={searchText}
									setSearchText={setSearchText}
								/>
							</Col>
						</Row>
						<Row className='customer-gen-info justify-content-between mb-5'>
							<Col sm={'auto'} lg={9} className='customer-photo col-10'>
								<Row>
									<Col
										xs={'auto'}
										className='right-panel-img text-center mb-sm-4 mb-lg-0'
									>
										<img src={customers[4].img} alt='super auto' />
									</Col>
									<Col xs={'auto'} className=' mb-3 mt-3'>
										<h3>
											{customers[4].first_name} {customers[4].last_name}
										</h3>
									</Col>
								</Row>
							</Col>
							<Col
								sm={12}
								md={'auto'}
								lg={3}
								className='car-control-buttons align-items-start align-items-lg-unset
                        '
							>
								<Col xs={12} md={12} lg={12}>
									<button className='edit-btn'>Edit</button>
								</Col>
								<Col xs={12} md={12} lg={12}>
									<button className='remove-btn'>Remove</button>
								</Col>
							</Col>
						</Row>
						<div className='car-info-details d-md-flex flex-wrap justify-content-md-between'>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Id</h6>
								<div className='underline'></div>
								{customers[4].id}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Phone</h6>
								<div className='underline'></div>
								{customers[4].phone_number}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Id Card</h6>
								<div className='underline'></div>
								{customers[4].id_card_number}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Driver Licence</h6>
								<div className='underline'></div>
								{customers[4].driver_license_number}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Credit Card</h6>
								<div className='underline'></div>
								{customers[4].credit_card_number}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Date of Birth</h6>
								<div className='underline'></div>
								{customers[4].date_of_birth}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>City</h6>
								<div className='underline'></div>
								{customers[4].address.city}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Address</h6>
								<div className='underline '></div>
								{customers[4].address.country}
								<br></br>
								{customers[4].address.postal_code}, {customers[4].address.city}
								<br></br>
								{customers[4].address.street}
							</div>
						</div>
					</div>

					<div className='right-panel  col-12 col-lg-12  col-xxl-10'>
						<h2>Latest Bookings</h2>
						<br></br>
						<CustomersBookingTable />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CustomersRightPanel;
