/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';

export const AddModal = ({show, setShow, btnText, children}) => {

	const handleClose = () => setShow(false);

	return (
		<Modal
			show={show}
			onHide={handleClose}
			backdrop='static'
			keyboard={false}
			size='xl'
			centered='true'
			dialogClassName='custom-dialog'
		>
			<Modal.Header closeButton>
				<Modal.Title>Add {btnText}</Modal.Title>
			</Modal.Header>
                {children}
			<Modal.Footer>
				<button className='btn-secondary' onClick={handleClose}>
					Cancel
				</button>
				<button className='btn-primary' onClick={handleClose}>
					Add {btnText}
				</button>
			</Modal.Footer>
		</Modal>
	);
};
