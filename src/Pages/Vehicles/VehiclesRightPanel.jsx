import { Carousel, Col, Form, Row } from "react-bootstrap"
import data from '../../../public/data/data.json';
import { CarBookingHistoryTable } from "./carBookingHistoryTable";

function VehiclesRightPanel() {

    return (
        <div className='dashboard-tab-holder col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-8'>
        <div className='tab-box'>
            <div className='tab-container'>
                <div className='right-panel car-details col-12  col-xxl-10'>
                    <Row className='mb-4'>
                        <Col>
                            <h1>Car Details</h1>
                        </Col>
                        <Col xs='auto' lg={3}>
                            <Form.Control
                                type='text'
                                placeholder='Search'
                                className=' mr-sm-2 search-input'
                            />
                        </Col>
                    </Row>
                    <Row className='car-gen-info row justify-content-between mb-5'>
                        <Col sm={'auto'} lg={9} className='car-photo-brand '>
                            <Row>
                                <Col
                                    xs={'auto'}
                                    className='car-img  text-center mb-sm-4 mb-lg-0'
                                >
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                src={data.cars[4].photo}
                                                alt='super auto'
                                                className='d-block'
                                            />
                                            <Carousel.Caption></Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                src={data.cars[4].photo}
                                                alt='super auto'
                                                className='d-block'
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                src={data.cars[4].photo}
                                                alt='super auto'
                                                className='d-block'
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                                <Col xs={'auto'} className=' mb-3 mt-3'>
                                    <h3>
                                        {data.cars[4].brand} {data.cars[4].model}
                                    </h3>
                                    <p className='lic-plate phone'>
                                        License plate: {data.cars[4].license_plate}
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={'auto'} lg={3} className='car-control-buttons align-items-start align-items-lg-unset
                        '>
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
                            <h6>VIN</h6>
                            <div className='underline'></div>
                            <p>{data.cars[4].vin}</p>
                        </div>
                        <div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
                            <h6>Year</h6>
                            <div className='underline'></div>
                            {data.cars[4].year}
                        </div>
                        <div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
                            <h6>Fuel</h6>
                            <div className='underline'></div>
                            {data.cars[4].fuel_type}
                        </div>
                        <div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
                            <h6>Body</h6>
                            <div className='underline'></div>
                            {data.cars[4].body_style}
                        </div>
                        <div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
                            <h6>Transmision</h6>
                            <div className='underline'></div>
                            {data.cars[4].transmission}
                        </div>
                        <div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
                            <h6>Consumption</h6>
                            <div className='underline'></div>
                            {data.cars[4].fuel_consumption.average}L
                        </div>
                        <div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
                            <h6>Milage</h6>
                            <div className='underline'></div>
                            {data.cars[4].mileage}
                        </div>
                        <div className='info-item col-md-4 col-lg-5 col-xl-3 text-center'>
                            <h6>Engine</h6>
                            <div className='underline '></div>
                            {data.cars[4].engine_capacity}
                        </div>
                    </div>
                </div>
                <div className='right-panel  col-12 col-lg-12  col-xxl-10'>
                    <h3>Car Live Location</h3>
                    <br></br>
                    <div className='map'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4242.527080986626!2d20.684758995742865!3d49.60059133549279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de527c4c967d1%3A0x4656f90ca24683d9!2sWy%C5%BCsza%20Szko%C5%82a%20Biznesu%20-%20National%20Louis%20University!5e0!3m2!1spl!2sis!4v1714767137665!5m2!1spl!2sis'
                            // width='600'
                            // height='450'
                            // style='border:0;'
                            style={{ width: '100%', height: '200px', border: '0' }}
                            allowFullScreen={false}
                            loading='lazy'
                            // referrerpolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </div>
                </div>
                <div className='right-panel  col-12 col-lg-12  col-xxl-10'>
                    <h5>Up Bookings</h5>
                    {/* {CarBookingHistoryTable()} */}
                    <CarBookingHistoryTable />
                </div>
            </div>
        </div>
    </div>
    )
}

export default VehiclesRightPanel
