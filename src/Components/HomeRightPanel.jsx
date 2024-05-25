import moment from "moment";
import { Button, Col, Form, Row, Tooltip } from "react-bootstrap";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import data from "../../public/data/data.json";
import { useMemo, useState } from "react";
import Table from './table'

const data2 = [
    {
        name: moment().subtract(6, "days").calendar("l"),
        income: 23000,
        expences: 18000,
    },
    {
        name: moment().subtract(5, "days").calendar("l"),
        income: 19000,
        expences: 13398,
    },
    {
        name: moment().subtract(4, "days").calendar("l"),
        income: 22300,
        expences: 9800,
    },
    {
        name: moment().subtract(3, "days").calendar("l"),
        income: 27180,
        expences: 3908,
    },
    {
        name: moment().subtract(2, "days").calendar("l"),
        income: 1890,
        expences: 4800,
    },
    {
        name: moment().subtract(1, "days").calendar("l"),
        income: 20390,
        expences: 3800,
    },
    {
        name: moment().subtract(0, "days").calendar("l"),
        income: 3490,
        expences: 4300,
    },
];

const latestBookings = data.latestBookings;
const customers = data.customers;

function HomeRightPanel() {
    const [data, setData] = useState(latestBookings);
    const [columnFilters, setColumnFilters] = useState([]);
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 3 });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const columns = useMemo(() => [
        {
            header: "Booking no.",
            id: 1,
            accessorKey: "booking_no",
            cell: ({ row }) => {
                return <div className="bookings-table-bookId">{row.original.booking_id}</div>;
            },
        },
        {
            header: "Name",
            id: 2,
            accessorKey: "name",
            cell: ({ row }) => {
                const customer = customers.find(r => row.original.customer_id === r.id);
                return (
                    <div className="bookings-table-bookId">
                        {customer.first_name} {customer.last_name}
                    </div>
                );
            },
        },
        {
            header: "Status",
            id: 3,
            accessorKey: "status",
            cell: ({ row }) => {
                return (
                    <div className={`bookings-table-bookId table-status table-status--${row.original.booking_status}`}>
                        <p>{row.original.booking_status}</p>
                    </div>
                );
            },
        },
        {
            header: "Sesion Details",
            id: 4,
            accessorKey: "session_details",
            // eslint-disable-next-line no-unused-vars
            cell: ({ row }) => {
                return (
                    <div className="bookings-table-bookId">
                        <Button variant="primary">Details</Button>
                    </div>
                );
            },
        },
    ]);
    return (
        <div className="dashboard-tab-holder col-12 col-md-12 col-lg-7 col-xl-8 ">
            <div className="tab-box">
                <div className="tab-container">
                    <div className="tab-panel right-panel car-availability col-10">
                        <h5>Car Availability</h5>
                        <Form className="car-availability__form">
                            <Row className="align-items-center justify-content-space-between">
                                <Col xs="12" md="4">
                                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        // className='mb-2'
                                        id="inlineFormInput"
                                        placeholder="Car number"
                                    />
                                </Col>
                                <Col xs="12" md="4">
                                    <Form.Select aria-label="Default select example">
                                        <option>Select time</option>
                                        <option value="1">01:00</option>
                                        <option value="2">12:00</option>
                                        <option value="3">18:00</option>
                                    </Form.Select>
                                </Col>
                                <Col xs="12" md="4">
                                    <Form.Control
                                        type="date"
                                        defaultValue={moment().format("DD.MM.yyyy")}
                                        placeholder={moment().format("DD.MM.yyyy")}></Form.Control>
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mt-4 form-btn" onClick={e => e.preventDefault()}>
                                        Check
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="tab-panel right-panel  latest-booking-status col-10">
                        <h5>Latest booking status</h5>
                        <Table
                            data={data}
                            columnFilters={columnFilters}
                            pagination={pagination}
                            setData={setData}
                            setPagination={setPagination}
                            columns={columns}
                            setColumnFilters={setColumnFilters}
                        />
                    </div>
                    <div className="tab-panel right-panel erninig-summary col-10">
                        <h5>Erning summary</h5>
                        <Col style={{ width: "100%", height: "18rem" }}>
                            <ResponsiveContainer width="100%" height="100%" className="mt-4">
                                <AreaChart
                                    data={data2}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}>
                                    <CartesianGrid strokeDasharray="2 2" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="income"
                                        stackId="1"
                                        stroke="#5456e3"
                                        fill="rgba(119, 122, 249, 1)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="expences"
                                        stackId="2"
                                        stroke="#585858"
                                        fill="rgba(125, 125, 125, 1)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Col>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeRightPanel;
