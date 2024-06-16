/* eslint-disable react/prop-types */
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

const options = [
	{ value: 'Bluetooth', label: 'Bluetooth' },
	{ value: 'Heated seats', label: 'Heated seats' },
	{ value: 'Leather', label: 'Leather' },
	{ value: 'Cameras', label: 'Cameras' },
	{ value: 'Navigation', label: 'Navigation' },
];
const animatedComponents = makeAnimated();

export function AnimatedMulti({placeholder}) {
	return (
		<Select
			closeMenuOnSelect={false}
			components={animatedComponents}
			defaultValue={[]}
			isMulti
			options={options}
			className='comfort-select'
			classNamePrefix='comfort-select'
			placeholder={placeholder}
		/>
	);
}
