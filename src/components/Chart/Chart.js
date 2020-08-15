import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import fetchData from "../../api/fetchData";
import style from "./Charts.module.css";

const Chart = () => {
	const [data, setData] = useState({});
	const [duration, setDuration] = useState(1);

	useEffect(() => {
		const fetAPI = async () => {
			const initalData = await fetchData();
			setData(
				initalData.slice(
					duration === 0 ? 0 : initalData.length - duration * 30,
					initalData.length - 1
				)
			);
		};
		fetAPI();
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
								fill: true,
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
								label: "Recovered",
								fill: true,
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
								fill: true,
								borderColor: "#6c757d",
								data: data.map(item => item?.deceased),
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
								label: "Tested",
								fill: true,
								borderColor: "#201aa2dd",
								data: data.map(item => item?.tested),
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
			{lineChart}
		</>
	);
};

export default Chart;
