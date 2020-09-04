import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import { PulseLoader } from "react-spinners";
import axios from "axios";

import {
	chartOptions,
	parseOptions,
	confirmedChart,
	activeChart,
	recovredChart,
	deceasedChart,
} from "./charts";

function Charts() {
	const [data, setData] = useState({});
	const [duration, setDuration] = useState(1);

	useEffect(() => {
		let initialData = [];

		axios.get("https://mh34-api.vercel.app/temp/data.json").then(resp => {
			initialData = resp.data;
			setData(
				initialData.slice(
					duration === 0 ? 0 : initialData.length - duration * 30,
					initialData.length
				)
			);
		});
	}, [duration]);

	const updateDurationHandler = number => {
		if (!number && data[0]) setDuration(0);
		setDuration(number);
	};

	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	const chart = data[0] ? (
		<>
			<div className='chart'>
				<div className='title'>Confirmed</div>
				<Line
					data={{
						labels: data.map(item => item.date),
						datasets: [
							{
								label: "Confirmed",
								data: data.map(item => item.confirmed),
							},
						],
					}}
					options={confirmedChart.options}
				/>
			</div>
			<div className='chart'>
				<div className='title'>Active</div>
				<Line
					data={{
						labels: data.map(item => item.date),
						datasets: [
							{
								label: "Active",
								data: data.map(item => item.active),
							},
						],
					}}
					options={activeChart.options}
				/>
			</div>
			<div className='chart'>
				<div className='title'>Recovered</div>
				<Line
					data={{
						labels: data.map(item => item.date),
						datasets: [
							{
								label: "Recovred",
								data: data.map(item => item.recovered),
							},
						],
					}}
					options={recovredChart.options}
				/>
			</div>
			<div className='chart'>
				<div className='title'>Deceased</div>
				<Line
					data={{
						labels: data.map(item => item.date),
						datasets: [
							{
								label: "Deceased",
								data: data.map(item => item.deceased),
							},
						],
					}}
					options={deceasedChart.options}
				/>
			</div>
		</>
	) : (
		<PulseLoader loading color='#AADEF0' />
	);
	return (
		<div className='container'>
			<div className='btn-container'>
				<button
					className='btn'
					onClick={() => updateDurationHandler(0)}>
					Begining
				</button>
				<button
					className='btn'
					onClick={() => updateDurationHandler(2)}>
					2 months
				</button>
				<button
					className='btn'
					onClick={() => updateDurationHandler(1)}>
					1 month
				</button>
			</div>
			<div className='chart-container'>{chart}</div>
		</div>
	);
}

export default Charts;
