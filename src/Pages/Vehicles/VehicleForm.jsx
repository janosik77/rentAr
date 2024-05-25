import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import { AnimatedMulti } from './select';

import Select from 'react-select';

export const VehicleForm = () => {
	const yearsOptions = [
		{ value: '2017', label: '2017' },
		{ value: '2020', label: '2020' },
		{ value: '2019', label: '2019' },
	];

	const brandsOptions = [
		{ value: 'audi', label: 'Audi' },
		{ value: 'mercedes', label: 'Mercedes' },
		{ value: 'ford', label: 'Ford' },
	];

	const modelsOptions = [
		{ value: 'audi', label: 'Audi' },
		{ value: 'mercedes', label: 'Mercedes' },
		{ value: 'ford', label: 'Ford' },
	];

	const fuelOptions = [
		{ value: 'gasoline', label: 'Gasoline' },
		{ value: 'diesel', label: 'Diesel' },
		{ value: 'electric', label: 'Electric' },
		{ value: 'hybrid', label: 'Hybrid' },
		{ value: 'oil', label: 'Oil' },
	];

	const bodyStyleOptions = [
		{ value: 'sedan', label: 'Sedan' },
		{ value: 'coupe', label: 'Coupe' },
		{ value: 'hatchback', label: 'Hatchback' },
		{ value: 'van', label: 'Van' },
	];

	const transmissionOptions = [
		{ value: 'automatic', label: 'Automatic' },
		{ value: 'manual', label: 'Manual' },
	];

	return (
		<Modal.Body>
			<div className='form'>
				<h5 className='grneral-info'>Enter required information:</h5>
				<div className='add-car row justify-content-around'>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Brand</Form.Label>
						<Select
							options={brandsOptions}
							placeholder='-- select brand --'
							className='comfort-select'
							classNamePrefix='comfort-select'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Model</Form.Label>
						<Select
							options={modelsOptions}
							placeholder='-- select model --'
							className='comfort-select'
							classNamePrefix='comfort-select'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Registration number</Form.Label>

						<Form.Control
							aria-label='Car registration input'
							aria-describedby='registration-info'
							type='text'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>VIN</Form.Label>

						<Form.Control
							aria-label='VIN input'
							aria-describedby='VIN-info'
							type='text'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Year</Form.Label>
						<Select
							options={yearsOptions}
							placeholder='-- select year --'
							className='comfort-select'
							classNamePrefix='comfort-select'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Fuel type</Form.Label>
						<Select
							options={fuelOptions}
							placeholder='-- select fuel type --'
							className='comfort-select'
							classNamePrefix='comfort-select'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Body style</Form.Label>
						<Select
							options={bodyStyleOptions}
							placeholder='-- select body style --'
							className='comfort-select'
							classNamePrefix='comfort-select'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Transmission</Form.Label>
						<Select
							options={transmissionOptions}
							placeholder='-- select transmission --'
							className='comfort-select'
							classNamePrefix='comfort-select'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Fuel consumption</Form.Label>
						<Form.Control
							aria-label='Fuel consumption'
							aria-describedby='Fuel-consumption-info'
							type='number'
							placeholder='In litres'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Engine capacity</Form.Label>
						<Form.Control
							aria-label='engine capacity'
							aria-describedby='engine-capacity-info'
							type='number'
							placeholder='Engine capacity: cubic centimetres (cc)'
						/>
					</Col>
					<Col className='m-3 col-11'>
						<Form.Label>Mileage</Form.Label>
						<InputGroup>
							<Form.Control
								aria-label='mileage'
								aria-describedby='mileage-info'
								type='number'
								placeholder='Type mileage'
							/>
						</InputGroup>
					</Col>
					<Col xs={11} className='m-3'>
						<Form.Label>Comfort</Form.Label>
						<AnimatedMulti placeholder='-- select comfort --' />
					</Col>
				</div>
			</div>
		</Modal.Body>
	);
};
