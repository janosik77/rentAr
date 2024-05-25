import { Col, Form, Row } from "react-bootstrap";
import data from "../../../public/data/data.json";
import { UserActivityTable } from "./userActivityTable";

function UsersRightPanel() {
    const users = data.users;
    return (
        <div className="dashboard-tab-holder col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-8">
        <div className="tab-box">
            <div className="tab-container">
                <div className="right-panel user-details col-12  col-xxl-10">
                    <Row className="mb-4">
                        <Col>
                            <h1>User</h1>
                        </Col>
                        <Col xs="auto" lg={3}>
                            <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
                        </Col>
                    </Row>
                    <Row className="user-gen-info justify-content-between mb-5">
                        <Col sm={"auto"} lg={9} className="user-photo-brand col-10">
                            <Row>
                                <Col
                                    xs={"auto"}
                                    className="right-panel-img text-center mb-sm-4 mb-lg-0">
                                    <img src={users[2].img} alt="super auto" />
                                </Col>

                                <Col xs={"auto"} className=" mb-3 mt-3">
                                    <h3>
                                        {users[2].first_name} {users[2].last_name}
                                    </h3>
                                    <p className="lic-plate phone">Position: {users[2].position}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col
                            sm={12}
                            md={"auto"}
                            lg={3}
                            className="car-control-buttons align-items-start align-items-lg-unset
                        ">
                            <Col xs={12} md={12} lg={12}>
                                <button className="edit-btn">Edit</button>
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <button className="remove-btn">Remove</button>
                            </Col>
                        </Col>
                    </Row>
                    <div className="car-info-details d-md-flex flex-wrap justify-content-md-between">
                        <div className="info-item col-md-3 col-lg-3 text-center">
                            <h6>Email</h6>
                            <div className="underline"></div>
                            {users[2].email}
                        </div>
                        <div className="info-item col-md-3 col-lg-3 text-center">
                            <h6>Phone no.</h6>
                            <div className="underline"></div>
                            {users[2].phone_number}
                        </div>
                        <div className="info-item col-md-4 col-lg-3 text-center">
                            <h6>Adress</h6>
                            <div className="underline"></div>
                            {users[2].address.country}
                            <br></br>
                            {users[2].address.city}
                            <br></br>
                            {users[2].address.street}
                        </div>
                        <div className="info-item col-md-3 col-lg-3 text-center">
                            <h6>Branch</h6>
                            <div className="underline"></div>
                            {users[2].branch_city}
                        </div>
                    </div>
                </div>
                <div className="right-panel  col-12 col-lg-12  col-xxl-10">
                    <h5>Latest Activity</h5>
                    <UserActivityTable />
                </div>
            </div>
        </div>
    </div>
    )
}

export default UsersRightPanel
