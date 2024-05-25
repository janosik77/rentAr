// import { useState } from 'react';
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./reports.css";
import ReportsTab from "./ReportsTab";
// import ReactDatePicker from "react-datepicker";

export const Reports = () => {
    // const [key, setKey] = useState();

    return (
        <div className="bookings">
            <div className="separator"></div>
            {/* left panel */}
            <div className="container-fluid">
                <div className="tab-container">
                    <Col className="right-panel  col-12 col-lg-12  col-xxl-10 reports">
                        <h5>Reports</h5>
                        <br></br>
                        <Tabs id="reports-tabs" defaultActiveKey="vehiclePerformance" justify>
                            <Tab eventKey="vehiclePerformance" title="Vehicle Performence">
                                <ReportsTab />
                            </Tab>
                            <Tab eventKey="financial" title="Financial">
                                <ReportsTab />
                            </Tab>
                            <Tab eventKey="customers" title="Customers">
                                <ReportsTab />
                            </Tab>
                            <Tab eventKey="staff" title="Staff">
                                <ReportsTab />
                            </Tab>
                            <Tab eventKey="bookings" title="Bookings">
                                <ReportsTab />
                            </Tab>
                            <Tab eventKey="activity" title="Activity">
                                <ReportsTab />
                            </Tab>
                        </Tabs>
                    </Col>
                </div>
            </div>
            <div className="separator"></div>
        </div>
    );
};
