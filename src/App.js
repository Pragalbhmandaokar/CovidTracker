import React, { Suspense, lazy } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
const Home = lazy(() => import("./views/Home"));
const Faqs = lazy(() => import("./views/Faqs"));
const Symptons = lazy(() => import("./views/Symptons"));
const Prevention = lazy(() => import("./views/Preventions"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
	const location = useLocation();
	const pages = [
		{
			pageLink: "/",
			view: Home,
			displayName: "Home",
			icon: "Home",
		},
		{
			pageLink: "/symptions",
			view: Symptons,
			displayName: "Symptions",
			icon: "LifeBuoy",
		},
		{
			pageLink: "/prevention",
			view: Prevention,
			displayName: "Prevention",
			icon: "Shield",
		},
		{
			pageLink: "/faqs",
			view: Faqs,
			displayName: "Faqs",
			icon: "HelpCircle",
		},
	];
	return (
		<div className='App'>
			<Navbar />
			<main className='content'>
				<Suspense fallback={<div />}>
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
				</Suspense>
			</main>
			<Footer />
		</div>
	);
}

export default App;
