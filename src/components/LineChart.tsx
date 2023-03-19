import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	scales,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'bottom' as const,
		},
		title: {
			display: true,
			text: 'Accounts Created',
		},
	},
};

const labels = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
// labels.map(() => faker.datatype.number({ min: 0, max: 1000 }))
//[60,70,84,97,112,123,145,130,124,100,134,180]
export const data = {
	labels,
	datasets: [
		{
			label: 'Users',
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			borderColor: 'rgb(34,211,238)',
			fill: true,
			tension: 0.1,
			backgroundColor: 'rgba(34,211,238, 0.1)',
		},
	],
};

const LineChart = () => {
	return <Line options={options} data={data} />;
};

export default LineChart;
