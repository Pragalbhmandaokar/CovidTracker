import React from "react";

import style from "./About.module.css";

const about = () => (
	<div className={style.About}>
		<h2 className={style.Question}>Are you official?</h2>
		<h2 className={style.Answer}>No.</h2>
		<h2 className={style.Question}>
			What are your sources? How is the data gathered for this project?
		</h2>
		<h2 className={style.Answer}>
			We are using official handles to update our numbers. The data
			published into a Google sheet and an API. Google sheet is available
			for all at
			<a
				href='https://docs.google.com/spreadsheets/d/e/2PACX-1vRv1_RoVZIMC8gz2zRwRd-C3e5vqyYbIyVAA3SYE9UUG2lL1BaMk2Q9MYO0SjY5MFvFDzk4AxF_xSci/pubhtml'
				target='_blank'
				rel='noopener noreferrer'>
				here.
			</a>
		</h2>
		<h2 className={style.Question}>
			Why there is difference in numbers compared to MOHFW website?
		</h2>
		<h2 className={style.Answer}>
			MoHFW updates the data at a scheduled time. However, we update them
			based on data from Collector Office, Chandrapur.
		</h2>
		<h2 className={style.Question}>Where can I find the data for this?</h2>
		<h2 className={style.Answer}>
			All the data is available through an Google sheet{" "}
			<a
				href='https://docs.google.com/spreadsheets/d/e/2PACX-1vRv1_RoVZIMC8gz2zRwRd-C3e5vqyYbIyVAA3SYE9UUG2lL1BaMk2Q9MYO0SjY5MFvFDzk4AxF_xSci/pubhtml'
				target='_blank'
				rel='noopener noreferrer'>
				here.
			</a>
		</h2>
	</div>
);

export default about;
