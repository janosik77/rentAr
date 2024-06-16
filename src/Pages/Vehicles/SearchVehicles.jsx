/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import data from '../../../public/data/data.json';


const carsData = data.cars;

const SearchVehicles = ({ searchText, setSearchText }) => {
	
	const [cars, setCars] = useState([]); 
	const [filteredCars, setFilteredCars] = useState([]); 

	
	useEffect(() => {
		setCars(carsData);
		setFilteredCars(carsData);
	}, []);

	
	useEffect(() => {
		const results = cars.filter(
			(car) =>
				car.brand.toLowerCase().includes(searchText.toLowerCase()) ||
				car.model.toLowerCase().includes(searchText.toLowerCase()) ||
				car.year.toString().includes(searchText)
		);
		setFilteredCars(results); 
	}, [searchText, cars]); 

	
	const handleInputChange = (event) => {
		setSearchText(event.target.value);
	};

	
	const handleResultClick = (car) => {
		console.log(`Clicked on: ${car.brand} ${car.model} (${car.year})`);
	};

	return (
		<div className='search-container'>
			<Form.Control
				type='text'
				placeholder='Search'
				className='mr-sm-2 search-input'
				value={searchText}
				onChange={handleInputChange}
			/>
			
			{searchText && (
				<div className='results-container'>
					{filteredCars.length > 0 ? (
						<ul className='results-list'>
							{filteredCars.map((car) => (
								<li
									key={car.id}
									className='result-item'
									onClick={() => handleResultClick(car)}
								>
									<div className='result-card'>
										<div className='d-flex flex-column gap-1'>
											<div className='card-title'>
												{car.brand} {car.model}
											</div>
											<div className='mb-2 card-subtitle'>Rok: {car.year}</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					) : (
						<p>No results found</p>
					)}
					
				</div>
			)}
		</div>
	);
};

export default SearchVehicles;
