import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const DriverForm = () => {

	return (
		<Modal.Body>
			<div className='form'>
				<h5 className='grneral-info'>Enter required information:</h5>
				<div className='add-car row justify-content-around'>
					<Col xs={11} sm={5} className='m-3'>
						{/* <FloatingLabel controlId='floatingSelect' label='Brand'> */}
						<Form.Label>First name</Form.Label>
						<Form.Control
							aria-label='First name input'
							aria-describedby='first-name-info'
							type='text'
						/>
						{/* </FloatingLabel> */}
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						{/* <FloatingLabel controlId='floatingSelect' label='Model'> */}
						<Form.Label>Last name</Form.Label>
						<Form.Control
							aria-label='Last name input'
							aria-describedby='last-name-info'
							type='text'
						/>
						{/* </FloatingLabel> */}
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Phone number</Form.Label>
						{/* <InputGroup > */}
						<Form.Control
							aria-label='Phone number input'
							aria-describedby='phone-info'
							type='text'
							// placeholder="Registration number"
						/>
						{/* </InputGroup> */}
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Driver license number</Form.Label>
						<Form.Control
							aria-label='Driver license number input'
							aria-describedby='driver-license-number-info'
							type='text'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Experience</Form.Label>
						<Form.Control
							aria-label='Experience input'
							aria-describedby='experience-info'
							type='number'
							placeholder='Years of experience'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Image</Form.Label>
						<Form.Control
							aria-label='Image input'
							aria-describedby='image-info'
							type='file'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Street</Form.Label>
						<Form.Control
							aria-label='Street input'
							aria-describedby='street-info'
							type='text'
							placeholder='With home number'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>City</Form.Label>
						<Form.Control
							aria-label='City input'
							aria-describedby='city-info'
							type='text'
						/>
					</Col>
					<Col xs={11} sm={5} className='m-3'>
						<Form.Label>Postal code</Form.Label>
						<Form.Control
							aria-label='Postal code input'
							aria-describedby='postal-code-info'
							type='text'
						/>
					</Col>
					<Col xs={11} sm={5} c className='m-3 '>
						<Form.Label>Country</Form.Label>
						<Form.Control
							aria-label='Country input'
							aria-describedby='country-info'
							type='text'
						/>
					</Col>
				</div>
			</div>
		</Modal.Body>
	);
};
