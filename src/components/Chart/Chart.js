import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import style from "./Charts.module.css";

const Chart = () => {
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

	const chartDataHandler = number => {
		if (!number && data[0]) setDuration(0);
		setDuration(number);
	};

	const lineChart = data[0] ? (
		<>
			<div className={style.Chart}>
				<Line
					data={{
						labels: data.map(item => item.date),
						datasets: [
							{
								label: "Confirmed",
								backgroundColor: "#ffa5a5",
								borderColor: "#ff073a",
								data: data.map(item => item.confirmed),
							},
						],
					}}
				/>
			</div>
			<div className={style.Chart}>
				<Line
					data={{
						labels: data.map(item => item.date),
						datasets: [
							{
								label: "Active",
								backgroundColor: "#a5ccff",
								borderColor: "#0000ff80",
								data: data.map(item => item.active),
							},
						],
					}}
				/>
			</div>
			<div className={style.Chart}>
				<Line
					data={{
						labels: data.map(item => item.date),
						datasets: [
							{
								label: "Recovered",
								backgroundColor: "#a5ffb4",
								borderColor: "#28a745",
								data: data.map(item => item.recovered),
							},
						],
					}}
				/>
			</div>
			<div className={style.Chart}>
				<Line
					data={{
						labels: data.map(item => item.date),
						datasets: [
							{
								label: "Deceased",
								backgroundColor: "#c5c5c5",
								borderColor: "#6c757d",
								data: data.map(item => item?.deceased),
							},
						],
					}}
				/>
			</div>
		</>
	) : null;

	return (
		<>
			<button className={style.Button} onClick={() => chartDataHandler()}>
				Beginning
			</button>
			<button
				className={style.Button}
				onClick={() => chartDataHandler(2)}>
				2 Months
			</button>
			<button
				className={style.Button}
				onClick={() => chartDataHandler(1)}>
				1 Month
			</button>
			<div className={style.ChartContainer}>{lineChart}</div>
		</>
	);
};

export default Chart;
