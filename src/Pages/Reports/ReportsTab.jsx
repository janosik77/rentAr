import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import moment from "moment/moment";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ChartVehicleRep } from "./chartVechicleRep";
import { ReportTable } from "./raportTable";
import Select from "react-select";

function ReportsTab() {

    const reportTypeOptions = [
        { value: "frequency_of_rentals", label: "Frequency of rentals" },
        { value: "average_rental_duration", label: "Average rental duration" },
        { value: "maintenance_costs", label: "Maintenance costs" },
        { value: "fuel_costs", label: "Fuel costs" },
        { value: "availability", label: "Availability" },
    ];

    const platesOptions = [
        { value: "KR12345", label: "KR12345 (Toyota Corolla)" },
        { value: "AB6789C", label: "AB6789C (Ford Focus)" },
        { value: "XYZ8901", label: "XYZ8901 (Honda Civic)" },
        { value: "LMN4567", label: "LMN4567 (Volkswagen Golf)" },
        { value: "JK1010K", label: "JK1010K (BMW 3 Series)" },
    ];
    return (
        <>
            <Row className="mt-5 mb-3">
                <Col xs={12} className="d-flex justify-content-end">
                    <ButtonGroup aria-label="Basic example" className="gap-3">
                        <Button variant="secondary">Generate</Button>
                        <Button variant="secondary">Export</Button>
                        <Button variant="secondary">More Options</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row className="justify-content-between mb-5">
                <Col className="d-flex justify-content-between flex-column flex-sm-row gap-3 gap-sm-0">
                    <div className="report-box d-flex flex-column col-12 col-sm-5">
                        <Form.Label>Report Type</Form.Label>
                        <Select
                            // closeMenuOnSelect={false}
                            // defaultValue={}
                            // isMulti
                            options={reportTypeOptions}
                            className="comfort-select"
                            classNamePrefix="comfort-select"
                            // defaultMenuIsOpen
                            placeholder="Select report type"
                        />
                    </div>
                    <div className="report-box d-flex flex-column col-12 col-sm-5">
                        <Form.Label>Vehicle</Form.Label>
                        <Select
                            // closeMenuOnSelect={false}
                            // defaultValue={[]}
                            // isMulti
                            options={platesOptions}
                            className="comfort-select"
                            classNamePrefix="comfort-select"
                            placeholder="Select vehicle"
                            // defaultMenuIsOpen
                        />
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-between mb-5">
                <Col className="d-flex justify-content-between flex-column flex-sm-row gap-3 gap-sm-0">
                    <div className="report-box report-box d-flex flex-column col-5 col-12 col-sm-5">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            className="form-control"
                            defaultValue={moment().format("DD.MM.yyyy")}
                            placeholder={moment().format("DD.MM.yyyy")}></Form.Control>
                    </div>

                    <div className="report-box report-box d-flex flex-column col-5 col-12 col-sm-5">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
                            defaultValue={moment().format("DD.MM.yyyy")}
                            placeholder={moment().format("DD.MM.yyyy")}></Form.Control>
                    </div>
                </Col>
            </Row>
            <Col style={{ width: "100%", height: "18rem" }}>
                <ChartVehicleRep />
            </Col>
            <Col>{ReportTable()}</Col>
        </>
    );
}

export default ReportsTab;
