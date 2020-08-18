import React from "react";

import style from "./Footer.module.css";

const Footer = () => (
	<div className={style.Footer}>
		<div className={style.Link}>
			<a
				href='https://github.com/ameykhaire/mh34-covid-tracker'
				target='_blank'
				rel='noopener noreferrer'>
				MH34 Covid Tracker
			</a>
		</div>
		<h5 className={style.Content}>
			Based on data of
			<strong> Local Authority (Collector Office, Chandrapur)</strong>
		</h5>
	</div>
);

export default Footer;
