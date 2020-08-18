import React from "react";
import { Home, HelpCircle, GitHub } from "react-feather";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/' exact>
			<Home color='#1d406f' />
			<span className={classes.MobileOnly}>Home</span>
		</NavigationItem>
		<NavigationItem link='/about'>
			<HelpCircle color='#1d406f' />
			<span className={classes.MobileOnly}>About us</span>
		</NavigationItem>
		<NavigationItem link='/github'>
			<GitHub color='#1d406f' />
			<span className={classes.MobileOnly}>GitHub</span>
		</NavigationItem>
	</ul>
);

export default navigationItems;
