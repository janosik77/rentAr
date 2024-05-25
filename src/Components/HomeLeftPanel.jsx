import moment from "moment"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const COLORS = ['#00D46E', '#EDBB36', '#E3653D'];
const RADIAN = Math.PI / 180;

const data = [
	{ name: 'Booked', value: 41 },
	{ name: 'Maintnenc', value: 15 },
	{ name: 'Available', value: 24 },
];

const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill='white'
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};




function HomeLeftPanel() {
    return (
        <div className='today-stats left-panel col-12 col-md-12 col-lg-5 col-xl-4'>
        <h1>Todays Statistics</h1>
        <p className='mb-4 today-date'>{moment().format('LLLL')}</p>
        <div className='left-panel-box container- '>
            <div className='row stats-container'>
                <div className=' left-panel-item income col-12 col-lg-10'>
                    <h5>Income</h5>
                    <h2>$20000</h2>
                    <div className='underline'></div>
                    <div className='month-income d-flex flex-column align-items-start'>
                        <p>Avarage monthly income:</p>
                        <p>
                            <span>$24583</span>
                        </p>
                    </div>

                    <div className='week-income d-flex flex-column align-items-start'>
                        <p>Incom last week</p>
                        <p>
                            <span>$153402</span>
                        </p>
                    </div>
                </div>
                <div className=' left-panel-item expenses col-12 col-lg-10'>
                    <h5>Expences</h5>
                    <h2>$8000</h2>
                    <div className='underline'></div>
                    <div className='month-income d-flex flex-column align-items-start'>
                        <p>Average monthly expences:</p>
                        <p>
                            <span>$15540</span>
                        </p>
                    </div>
                    <div className='week-income d-flex flex-column align-items-start'>
                        <p className='week-income'>Expenses last week</p>
                        <p>
                            <span>$68402</span>
                        </p>
                    </div>
                </div>
                <div className=' left-panel-item park-status col-12 col-lg-10'>
                    <h5>Park Status</h5>
                    <h6>80 vehicles</h6>
                    <div className='underline'></div>
                    <div style={{ width: '100%', height: '18rem' }}>
                        <ResponsiveContainer width='100%' height='100%'>
                            <PieChart width={300} height={300}>
                                <Pie
                                    data={data}
                                    cx='50%'
                                    cy='50%'
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={100}
                                    fill='#8884d8'
                                    dataKey='value'
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='marks row justify-content-center'>
                        <div className='color-marks status-available'>
                            <div></div>
                            <p>Available</p>
                        </div>
                        <div className='color-marks status-booked'>
                            <div></div>
                            <p>Booked</p>
                        </div>
                        <div className='color-marks status-maintenance'>
                            <div></div>
                            <p>Maintenance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeLeftPanel
