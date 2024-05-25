import { useMemo, useState } from "react";
import data from "../../../public/data/data.json";
import Table from "../../Components/table";
import { Button } from "react-bootstrap";

const bookings = data.bookings;
const customers = data.customers;
const cars = data.cars;
// const users = data.users;
const drivers = data.drivers;

export const BookingsTable = () => {
    const [data, setData] = useState(bookings);
    const [columnFilters, setColumnFilters] = useState([]);
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 8 });

    const columns = useMemo(() => [
        {
            header: "Booking ID",
            id: 1,
            accessorKey: "booking",
            cell: ({ row }) => {
                return <div className="bookings-table-bookId">{row.original.booking_id}</div>;
            },
        },
        {
            header: "Customer",
            id: 2,
            accessorKey: "customer",
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
            header: "Car",
            id: 3,
            accessorKey: "cars",
            cell: ({ row }) => {
                const car = cars.find(r => row.original.car_id === r.id);
                return (
                    <div className="bookings-table-car">
                        {car.brand} {car.model}
                    </div>
                );
            },
        },
        {
            header: "Start Date",
            id: 4,
            accessorKey: "start-date",
            cell: ({ row }) => {
                const reservation = bookings.find(r => row.original.booking_id === r.booking_id);
                return <div className="bookings-table-date">{reservation.start_date}</div>;
            },
        },
        {
            header: "End Date",
            id: 5,
            accessorKey: "end-date",
            cell: ({ row }) => {
                const reservation = bookings.find(r => row.original.booking_id === r.booking_id);
                return <div className="bookings-table-date">{reservation.end_date}</div>;
            },
        },
        {
            header: "Driver",
            id: 6,
            accessorKey: "driver",
            cell: ({ row }) => {
                const driver = drivers.find(r => row.original.driver_id === r.id);
                return (
                    <div className="bookings-table-bookId">
                        {driver !== undefined ? `${driver.first_name} ${driver.last_name}` : "none"}
                    </div>
                );
            },
        },
        {
            header: "Price",
            id: 7,
            accessorKey: "price",
            cell: ({ row }) => {
                const reservation = bookings.find(r => row.original.booking_id === r.booking_id);
                return <div className="bookings-table-bookId">${reservation.price}</div>;
            },
        },
        {
            header: "Status",
            id: 8,
            accessorKey: "status",
            cell: ({ row }) => {
                const reservation = bookings.find(r => row.original.booking_id === r.booking_id);
                return (
                    <div className={`bookings-table-bookId table-status table-status--${reservation.booking_status}`}>
                        <p>{reservation.booking_status}</p>
                    </div>
                );
            },
        },
        {
            header: "",
            id: 9,
            accessorKey: "buttons",
            cell: ({ row }) => {
                const reservation = bookings.find(r => row.original.booking_id === r.booking_id);
                
                return (
                    <div className="bookings-table-actions">
                        <Button id=''>Edit</Button><Button id='' >Details</Button><Button id='' >Remove</Button>
                    </div>
                );
            },
        },
    ]);

    return (
        <Table
            data={data}
            columnFilters={columnFilters}
            pagination={pagination}
            setData={setData}
            setPagination={setPagination}
            columns={columns}
            setColumnFilters={setColumnFilters}
        />
    );
};
