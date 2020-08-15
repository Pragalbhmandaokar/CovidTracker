import React from "react";

import CountUp from "react-countup";

import style from "./Card.module.css";

const CardComponent = ({ value, title, className }) => {
	if (!value) {
		return "Loading...";
	}
	return (
		<div className={[style.Card, className].join(" ")}>
			<h3 className={style.Title}>{title}</h3>
			<h2>
				<CountUp
					className={style.Count}
					start={0}
					end={value}
					duration={2.75}
					separator=','
				/>
			</h2>
		</div>
	);
};

export default CardComponent;
