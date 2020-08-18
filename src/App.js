import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Github from "./views/Github/Github";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/github' component={Github} />
				<Route path='/about' component={About} />
				<Route path='/' component={Home} />
			</Switch>
		</Layout>
	);
}

export default App;
