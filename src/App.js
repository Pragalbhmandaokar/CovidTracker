import React from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import Faqs from "./views/Faqs";
import Symptons from "./views/Symptons";
import Prevention from "./views/Preventions";
import Footer from "./components/Footer/Footer";

function App() {
	const location = useLocation();
	const pages = [
		{
			pageLink: "/",
			view: Home,
		},
		{
			pageLink: "/symptions",
			view: Symptons,
		},
		{
			pageLink: "/prevention",
			view: Prevention,
		},
		{
			pageLink: "/faqs",
			view: Faqs,
		},
	];
	return (
		<div className='App'>
			<Navbar />
			<main className='content'>
				<Switch location={location}>
					{pages.map((page, index) => {
						return (
							<Route
								exact
								path={page.pageLink}
								render={({ match }) => <page.view />}
								key={index}
							/>
						);
					})}
					<Redirect to='/' />
				</Switch>
			</main>
			<Footer />
		</div>
	);
}

export default App;
