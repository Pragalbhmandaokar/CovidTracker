import React from "react";

import fetchData from "./api/fetchData";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";

import "./App.css";

class App extends React.Component {
	state = {
		data: {},
	};

	async componentDidMount() {
		const initalData = await fetchData();
		this.setState({ data: initalData[initalData.length - 1] });
	}

	render() {
		const { data } = this.state;
		console.log(data);
		return (
			<div className='App'>
				<h1>MH-34 Covid Tracker</h1>
				<Cards
					confirmed={data.confirmed}
					active={data.active}
					recovered={data.recovered}
					deceased={data.deceased}
				/>
				<br />
				<Chart />
			</div>
		);
	}
}

export default App;
