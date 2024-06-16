/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import data from '../../../public/data/data.json'


const usersData = data.users;

const SearchUser = ({searchText, setSearchText}) => {
	
	const [data, setData] = useState([]); 
	const [filteredData, setFilteredData] = useState([]);

	
	useEffect(() => {
		setData(usersData)
        setFilteredData(usersData)
	}, []);

	
	useEffect(() => {
		const results = data.filter(
			(car) =>
				car.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
				car.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
				car.position.toString().includes(searchText)
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
												{item.position}
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

export default SearchUser;
