/* eslint-disable react/prop-types */
export const AddBtn = ({ setShow, btnText }) => {
	const handleShow = () => setShow(true);

	return (
		<button className='form-btn btn-primary' onClick={handleShow}>
			+ Add {btnText}
		</button>
	);
};
