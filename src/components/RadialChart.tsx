import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

export const data = {
	labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
	datasets: [
		{
			label: 'Api calls',
			data: [8, 9, 7, 8, 6, 7,8],
			backgroundColor: 'rgba(34,211,238, 0.1)',
			borderColor: 'rgba(34,211,238)',
			borderWidth: 1,
		},
	],
};

const RadialChart = () => {
	return <Radar data={data} />;
};
export default RadialChart;
