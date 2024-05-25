// import data from '../../../public/data/data.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BookingsTable } from './bookingsTable';
import Select from 'react-select'

export const Bookings = () => {
	// const cars = data.cars;
	const filterOptions = [
		{label: 'last 30 days', value: 'last 30 days'},
		{label: 'last 14 days', value: 'last 14 days'},
		{label: 'last 7 days', value: 'last 7 days'},
		{label: 'Price', value: 'Price'},
		{label: 'Status', value: 'Status'},
		{label: 'Start date', value: 'Start date'},
		{label: 'End date', value: 'End date'},
		{label: 'Car', value: 'Car'},
		{label: 'Customer', value: 'Customer'},
	]

	return (
		<div className='bookings'>
			<div className='separator'></div>
			{/* left panel */}
			<div className='container-fluid'>
				<div className='row justify-content-center'>
					<div className='right-panel col-11'>
						<div className='booking-header d-flex align-items-center justify-content-between'>
							<h1 className='col-2'>Bookings</h1>
							<div className='booking-buttons d-flex gap-3 col-10 justify-content-end'>
								{/* <button>Filter</button> */}
								<Select
									closeMenuOnSelect={false}
									defaultValue={[]}
									options={filterOptions}
									className='comfort-select col-4'
									classNamePrefix='comfort-select'
									placeholder='Filter'
								/>

								<button className='btn-secondary col-1'>Export</button>
								<button className='btn-primary col-2'>Add booking</button>
							</div>
						</div>
						<div>
							<BookingsTable></BookingsTable>
						</div>
					</div>
				</div>
			</div>
			<div className='separator'></div>
		</div>
	);
};
