import React from "react";
import { Grid } from "@material-ui/core";
import Card from "./Card/Card";

import style from "./Cards.module.css";
const Cards = ({ confirmed, active, recovered, deceased }) => {
	if (!confirmed) {
		return "Loading......";
	}
	return (
		<div className={style.Cards}>
			<Card
				value={confirmed}
				title='Confirmed'
				className={style.Confirmed}
			/>
			<Card value={active} title='Active' className={style.Active} />
			<Card
				value={recovered}
				title='Recovered'
				className={style.Recovered}
			/>
			<Card
				value={deceased}
				title='Deceased'
				className={style.Deceased}
			/>
		</div>
	);
};

export default Cards;
