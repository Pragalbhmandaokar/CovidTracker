import React from "react";
import Chart from "../components/Charts/Chart";
import Cards from "../components/Cards/Cards";

function Home() {
	return (
		<div className='home'>
			<div className='container'>
				<h1 className='desktop title1'>MH34 Covid Tracker</h1>
			</div>
			<Cards />
			<Chart />
		</div>
	);
}

export default Home;
