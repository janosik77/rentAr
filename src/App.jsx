import './App.css';
import HomeLeftPanel from './Components/HomeLeftPanel';
import HomeRightPanel from './Components/HomeRightPanel';



function App() {
	return (
		<div className=' home'>
			<div className='separator'></div>
			{/*HOME left panel */}
			<div className='container-fluid'>
				<div className='row align-items-start'>
					<HomeLeftPanel />

					{/* Home right panel */}
					<HomeRightPanel />

				</div>
			</div>
			<div className='separator'></div>
		</div>
	);
}

export default App;
