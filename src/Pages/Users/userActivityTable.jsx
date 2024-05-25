import { useMemo, useState } from "react";
import data from "../../../public/data/data.json"
import Table from "../../Components/table";


const bookings = data.activity.filter(r => r.user_id === 1);
// const customers = data.customers;
// const cars = data.cars;
// const users = data.users;
// const drivers = data.drivers;

export const UserActivityTable = () => {
    const [data, setData] = useState(bookings);
    const [columnFilters, setColumnFilters] = useState([]);
    const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 3})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const columns = useMemo(() => [
        {
            header: 'Event',
            id: 1,
            accessorKey: 'event',
            cell: ({row}) => {
                return <div className="activity-table-event">{row.original.activity_type}</div>
            }
        },
        {
            header: 'Event Id',
            id: 2,
            accessorKey: 'eventId',
            cell: ({row}) => {
                return <div className="activity-table">{row.original.event_id}</div>
            }
        },
        {
            header: 'Time stamp',
            id: 4,
            accessorKey: 'time-stamp',
            cell: ({row}) => {
                
                return <div className="activity-table">{row.original.timestamp}</div>
            }
        },
        {
            header: 'Duration',
            id: 5,
            accessorKey: 'duration',
            cell: ({row}) => {
                return <div className="activity-table">{row.original.activity_duration}</div>
            }
        },
        {
            header: 'Ip',
            id: 6,
            accessorKey: 'ip',
            cell: ({row}) => {
                return <div className="activity-table">{row.original.ip_address}</div>
            }
        },

    ])

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
    )
}