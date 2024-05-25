import './vehicles.css';
import VehiclesLeftPanel from './VehiclesLeftPanel';
import VehiclesRightPanel from './VehiclesRightPanel';

export const Vehicles = () => {


	return (
		<div className='cars'>
			<div className='separator'></div>
			{/*left panel */}
			<div className='container-fluid'>
				<div className='row align-items-start'>
					<VehiclesLeftPanel />
					{/* Home right panel */}
					<VehiclesRightPanel />

				</div>
			</div>
			<div className='separator'></div>
		</div>
	);
};
