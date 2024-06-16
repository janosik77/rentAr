import { Col, Form, Row } from 'react-bootstrap';
import data from '../../../public/data/data.json';
import { DriverLatestBookingTable } from './driverLatestBookingTable';
import { useState } from 'react';
import SearchDriver from './SearchDriver';

function DriversRightPanel() {
	const drivers = data.drivers;
	const [searchText, setSearchText] = useState('');

	return (
		<div className='dashboard-tab-holder col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-8'>
			<div className='tab-box'>
				<div className='tab-container'>
					<div className='right-panel driver-details col-12  col-xxl-10'>
						<Row className='mb-4'>
							<Col>
								<h1>Driver Details</h1>
							</Col>
							<Col xs='auto' lg={3}>
								{/* <Form.Control type="text" placeholder="Search" className=" mr-sm-2" /> */}
								<SearchDriver
									searchText={searchText}
									setSearchText={setSearchText}
								/>
							</Col>
						</Row>
						<Row className='driver-gen-info row justify-content-between mb-5'>
							<Col sm={'auto'} lg={9} className='driver-photo-name '>
								<div className='row'>
									<Col
										sm={'auto'}
										className='driver-img right-panel-img  driver-img__drivers text-center mb-sm-4 mb-lg-0'
									>
										<img src={drivers[4].img} alt='super auto' />
									</Col>
									<Col xs={'auto'} className=' mb-3 mt-3'>
										<h3>
											{drivers[4].first_name} {drivers[4].last_name}
										</h3>
										<p className='phone'>Phone: {drivers[4].phone_number}</p>
									</Col>
								</div>
							</Col>
							<Col sm={12} md={3} lg={3} className='driver-control-buttons'>
								<Col xs={12} sm={8} md={12} lg={12}>
									<button className='edit-btn'>Edit</button>
								</Col>
								<Col xs={12} sm={8} md={12} lg={12}>
									<button className='remove-btn'>Remove</button>
								</Col>
							</Col>
						</Row>
						<div className='car-info-details d-md-flex flex-wrap justify-content-md-between'>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Adress</h6>
								<div className='underline'></div>
								{drivers[4].address.country}
								<br></br>
								{drivers[4].address.city}, {drivers[4].address.street}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>License no.</h6>
								<div className='underline'></div>
								{drivers[4].driver_license_number}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Rating</h6>
								<div className='underline'></div>
								{(Math.random() * (5 - 3) + 3).toFixed(1)}
							</div>
							<div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
								<h6>Expirience</h6>
								<div className='underline'></div>
								{drivers[4].experience}
							</div>
						</div>
					</div>
					<div className='right-panel  col-12 col-lg-12  col-xxl-10'>
						<h5>Upcoming Reservation</h5>
						<DriverLatestBookingTable />
					</div>
				</div>
			</div>
		</div>
	);
}

export default DriversRightPanel;
