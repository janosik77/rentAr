import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
    ResponsiveContainer
} from 'recharts';

import chartData from '../../../public/data/chartData.json';
import { PureComponent } from 'react';

export class ChartVehicleRep extends PureComponent  {

    render(){
        return (
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                        data={chartData.data}
                        
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='month' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey='2023 expenses'
                            fill='#8884d8'
                            activeBar={<Rectangle fill='pink' stroke='blue' />}
                        />
                        <Bar
                            dataKey='2024 expenses'
                            fill='#82ca9d'
                            activeBar={<Rectangle fill='gold' stroke='purple' />}
                        />
                    </BarChart>
                </ResponsiveContainer>
        );
    }
}
