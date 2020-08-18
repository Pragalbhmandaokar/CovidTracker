import React from "react";
import { Menu } from "react-feather";

import classes from "./DrawerToggle.module.css";

const drawerToggle = props => (
	<div className={classes.DrawerToggle} onClick={props.clicked}>
		<Menu width='30px' height='30px' />
	</div>
);

export default drawerToggle;
