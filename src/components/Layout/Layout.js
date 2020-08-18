import React, { Component } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Footer from "../Footer/Footer";

class Layout extends Component {
	state = {
		showSideDrawe: false,
	};

	sideDraweClosedHandler = () => {
		this.setState({ showSideDrawe: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawe: !prevState.showSideDrawe };
		});
	};

	render() {
		return (
			<>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawe}
					closed={this.sideDraweClosedHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
				<Footer />
			</>
		);
	}
}

export default Layout;
