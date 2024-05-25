import { Col, Row } from "react-bootstrap";
import data from "../../../public/data/data.json";
import { UserForm } from "./UserForm";
import { FormModal } from "../../Components/FormModal";

function UsersLeftPanel() {
    const users = data.users;

    return (
        <div className="left-panel col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-4">
        <Row className="header-left align-items-center mb-4">
            <Col>
                <h1>All Users</h1>
            </Col>
            <Col className="d-flex justify-content-end">
                <FormModal btnText={"User"}><UserForm/></FormModal>
            </Col>
        </Row>
        <br></br>
        <Col className="left-panel-box drivers-items ">
            <ul className="left-panel-item col-sm-12 col-md-10 col-xl-12">
                {users.map(user => {
                    return (
                        <>
                            <li key={user.id}>
                                <div className="driver-item">
                                    <Row md={8} className="driver-item-info">
                                        <Col xs={"auto"} className="driver-img ">
                                            <img src={user.img} alt="super auto" />
                                        </Col>
                                        <Col
                                            xs={12}
                                            sm={5}
                                            md={"auto"}
                                            xl={12}
                                            xxl={5}
                                            className="driver-item-text">
                                            <h4>
                                                {user.first_name} {user.last_name}
                                            </h4>
                                            <p>
                                                <span>{user.position}</span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <div className="driver-status">
                                        <div
                                            className={`driver-status-item ${
                                                user.status === "online" ? "available" : "unavailable"
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

export default UsersLeftPanel
