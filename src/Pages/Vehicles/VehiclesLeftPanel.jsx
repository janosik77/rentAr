import { Col, Row } from 'react-bootstrap';
import data from '../../../public/data/data.json';
import {FormModal} from '../../Components/FormModal';
import {VehicleForm} from './VehicleForm';

function VehiclesLeftPanel() {
	const cars = data.cars;

	return (
		<div className='left-panel col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-4'>
			<Row className='header-left align-items-center mb-4'>
				<Col>
					<h1>All Cars</h1>
				</Col>
				<Col className='d-flex justify-content-end'>
					<FormModal btnText={'Car'}>
						<VehicleForm />
					</FormModal>
				</Col>
			</Row>
			<br></br>
			<Col className='left-panel-box cars-items '>
				<ul className='left-panel-item col-12 col-md-10 col-xl-12'>
					{cars.map((car, id) => {
						return (
							<>
								<li key={id}>
									<div className='car-item'>
										{/* <div className="car-item-info d-flex gap-3">
                                            <div className="car-img-left d-flex">
                                                <img src={car.photo} alt="super auto" />
                                            </div>
                                            <Col xs={12} sm={5} md={"auto"} xl={12} xxl={5} className="car-item-text">
                                                <h4>
                                                    {`${car.brand} ${car.model}`}
                                                </h4>
                                                <p>
                                                    Plate: <span>{car.license_plate}</span>
                                                </p>
                                            </Col>
                                        </div>
                                        <div className="car-status align-self-start">
                                            <div
                                                className={`car-status-item ${
                                                    car.car_status === "available" ? "available" : "unavailable"
                                                }`}>
                                            </div>
                                        </div> */}
										<Row md={8} className='car-item-info'>
											<Col xs={'auto'} className='car-img-left d-flex'>
												<img src={car.photo} alt='super auto' />
											</Col>
											<Col className='car-item-text'>
												<h4>
													{car.brand} {car.model}
												</h4>
												<p>
													Plate: <span>{car.license_plate}</span>
												</p>
											</Col>
										</Row>
										<div className='car-status align-self-start'>
											<div
												className={`car-status-item ${
													car.car_status === 'available'
														? 'available'
														: 'unavailable'
												}`}
											></div>
										</div>
									</div>
									<div className='underline'></div>
								</li>
							</>
						);
					})}
				</ul>
			</Col>
		</div>
	);
}

export default VehiclesLeftPanel;
