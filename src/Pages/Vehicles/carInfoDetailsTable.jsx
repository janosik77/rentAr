/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from 'react';
import data from '../../../public/data/data.json';
import Table from '../../Components/table';

const cars = data.cars;
const car =[cars[0]];
export const CarInfoDetailsTable = () => {
    const [data, setData] = useState(car);
    const [columnFilters, setColumnFilters] = useState([]);
    const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 3})

	console.log(car);

    const columns = useMemo(() => [

        {
            header: 'Year',
            id: 2,
            accessorKey: 'year',
            cell: ({row}) => {
                return <div className="car-details-table_year">{row.original.year}</div>
            }
        },
        {
            header: 'Fuel',
            id: 3,
            accessorKey: 'fuel',
            cell: ({row}) => {
                return <div className="car-details-table__fuel">{row.original.fuel_type}</div>
            }
        },
        {
            header: 'Body',
            id: 4,
            accessorKey: 'body',
            cell: ({row}) => {
                return <div className="car-details-table__body">{row.original.body_style}</div>
            }
        },
        {
            header: 'Transmision',
            id:5,
            accessorKey: 'transmision',
            cell: ({row}) => {
                return <div className="car-details-table__transmision">{row.original.transmission}</div>
            }
        },
        {
            header: 'Consumption',
            id: 6,
            accessorKey: 'consumption',
            cell: ({row}) => {
                return <div className="car-details-table__consumption">{row.original.fuel_consumption.average}L</div>
            }
        },
        {
            header: 'Milage',
            id: 7,
            accessorKey: 'milage',
            cell: ({row}) => {
                return <div className="car-details-table__milage">{row.original.mileage}</div>
            }
        },
        {
            header: 'Engine',
            id: 8,
            accessorKey: 'engine',
            cell: ({row}) => {
                return <div className="car-details-table__engine">{row.original.engine_capacity}</div>
            }
        },
        {
            header: 'VIN',
            id: 1,
            accessorKey: 'vin',
            cell: ({row}) => {
                return <div className="car-details-table__vin">{row.original.vin}</div>
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
};
