import { Col, Row } from "react-bootstrap";
import data from "../../../public/data/data.json";
import { FormModal } from "../../Components/FormModal";
import { DriverForm } from "./DriverForm";



function DriversLeftPanel() {
    const drivers = data.drivers;
    return (
        <div className="left-panel col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-4">
        <Row className="header-left align-items-center mb-4">
            <Col>
                <h1>All Drivers</h1>
            </Col>
            <Col className="d-flex justify-content-end"><FormModal btnText={"Driver"}><DriverForm/></FormModal></Col>
        </Row>
        <br></br>
        <Col className="left-panel-box drivers-items ">
            <ul className="left-panel-item income col-sm-12 col-md-10 col-xl-12">
                {drivers.map(driver => {
                    return (
                        <>
                            <li key={driver.id}>
                                <div className="driver-item">
                                    <Row className="driver-item-info">
                                        <Col xs={"auto"} className="driver-img">
                                            <img src={driver.img} alt="super auto" />
                                        </Col>
                                        <Col
                                            xs={12}
                                            sm={5}
                                            md={"auto"}
                                            xl={12}
                                            xxl={5}
                                            className="driver-item-text">
                                            <h4>
                                                {driver.first_name} {driver.last_name}
                                            </h4>
                                            <p>
                                                <b>Phone:</b> <span>{driver.phone_number}</span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <div className="driver-status">
                                        <div
                                            className={`driver-status-item ${
                                                driver.status === "available"
                                                    ? "available"
                                                    : "unavailable"
                                            }`}>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="underline"></div>
                        </>
                    );
                })}
            </ul>
        </Col>
    </div>
    )
}

export default DriversLeftPanel
