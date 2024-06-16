/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import data from '../../../public/data/data.json'

const customersData = data.customers;

const SearchCustomer = ({searchText, setSearchText}) => {
	
	const [data, setData] = useState([]); 
	const [filteredData, setFilteredData] = useState([]); 


	useEffect(() => {
		setData(customersData)
        setFilteredData(customersData)
	}, []);


	useEffect(() => {
		const results = data.filter(
			(car) =>
				car.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
				car.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
				car.driver_license_number.toString().includes(searchText)
		);
		setFilteredData(results); 
	}, [searchText, data]); 


	const handleInputChange = (event) => {
		setSearchText(event.target.value);
	};


	const handleResultClick = (car) => {
		console.log(car);
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
					{filteredData.length > 0 ? (
						<ul className='results-list'>
							{filteredData.map((item) => (
								<li
									key={item.id}
									className='result-item'
									onClick={() => handleResultClick(item)}
								>
									<div className='result-card'>
										<div className='d-flex flex-column gap-1'>
											<div className='card-title'>
												{item.first_name} {item.last_name}
											</div>
											<div className='mb-2 card-subtitle'>
												{item.driver_license_number}
											</div>
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

export default SearchCustomer;
