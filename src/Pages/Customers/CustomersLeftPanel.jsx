import { Col, Row } from "react-bootstrap";
import data from "../../../public/data/data.json";
import "./customers.css";
import { FormModal } from "../../Components/FormModal";
import { CustomerForm } from "./CustomerForm";

function CustomersLeftPanel() {
    const customers = data.customers;
    
    return (
        <div className="left-panel col-12 col-md-12 col-lg-5 col-xl-4 col-xxl-4">
        <Row className="header-left align-items-center mb-4">
            <Col>
                <h2>All Customers</h2>
            </Col>
            <Col className="d-flex justify-content-end">
                <FormModal btnText={"Customer"}><CustomerForm/></FormModal>
            </Col>
        </Row>
        <br></br>
        <Col className="left-panel-box drivers-items col-12">
            <ul className="left-panel-item col-12 col-md-10 col-xl-12">
                {customers.map(customer => {
                    return (
                        <>
                            <li key={customer.id}>
                                <div className="driver-item">
                                    <Row className="driver-item-info">
                                        <Col xs={"auto"} className="customer-img-left">
                                            <img src={customer.img} alt="super auto" />
                                        </Col>
                                        <Col className="driver-item-text col d-flex flex-column gap-3">
                                            <p>
                                                {customer.first_name} {customer.last_name}
                                            </p>
                                            <p>
                                                <b>Phone:</b> <span>{customer.phone_number}</span>
                                            </p>
                                        </Col>
                                    </Row>
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

export default CustomersLeftPanel
