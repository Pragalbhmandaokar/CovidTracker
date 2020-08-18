import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";
import style from "./Cards.module.css";

const Cards = () => {
	const [data, setData] = useState({});
	useEffect(() => {
		axios
			.get("https://mh34-api.vercel.app/temp/data.json")
			.then(resp => {
				setData(resp.data[resp.data.length - 1]);
			})
			.catch(err => console.log(err));
	}, []);
	if (!data.confirmed) {
		return "Loading......";
	}
	return (
		<>
			<h2>Current stats:</h2>
			<div className={style.Cards}>
				<Card
					value={data.confirmed}
					title='Confirmed'
					className={style.Confirmed}
				/>
				<Card
					value={data.active}
					title='Active'
					className={style.Active}
				/>
				<Card
					value={data.recovered}
					title='Recovered'
					className={style.Recovered}
				/>
				<Card
					value={data.deceased}
					title='Deceased'
					className={style.Deceased}
				/>
			</div>
		</>
	);
};

export default Cards;
