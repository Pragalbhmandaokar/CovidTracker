import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "react-use";
import * as Icon from "react-feather";
import Logo from "../../assets/svg/virus.svg";
import classNames from "classnames";

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const windowSize = useWindowSize();

	const menuToggleHandler = () => {
		setShowMenu(prevState => {
			return !prevState;
		});
		console.log(showMenu);
	};

	const sideDrawerClass = classNames("sidedrawer", {
		open: showMenu,
		close: !showMenu,
	});

	const navItems = (
		<ul className='nav-list'>
			<li className='nav-items' onClick={menuToggleHandler}>
				<NavLink to='/' exact activeClassName='nav-active'>
					<Icon.Home />
					<span className='nav-heading'>Home</span>
				</NavLink>
			</li>
			<li className='nav-items' onClick={menuToggleHandler}>
				<NavLink to='/symptions' activeClassName='nav-active'>
					<Icon.LifeBuoy />
					<span className='nav-heading'>Symptions</span>
				</NavLink>{" "}
			</li>
			<li className='nav-items' onClick={menuToggleHandler}>
				<NavLink to='prevention' activeClassName='nav-active'>
					<Icon.Shield />
					<span className='nav-heading'>Prevention</span>
				</NavLink>
			</li>
			<li className='nav-items' onClick={menuToggleHandler}>
				<NavLink to='/faqs' activeClassName='nav-active'>
					<Icon.HelpCircle />
					<span className='nav-heading'>Faqs</span>
				</NavLink>
			</li>
		</ul>
	);

	const navList =
		windowSize.width > 769 ? (
			navItems
		) : (
			<>
				<span className='nav-title'>MH34 Covid Tracker</span>
				<div className='menu-button' onClick={menuToggleHandler}>
					{showMenu ? (
						<Icon.X height='2rem' width='2rem' />
					) : (
						<Icon.Menu height='2rem' width='2rem' />
					)}
				</div>
				<div className={sideDrawerClass}>{navItems} </div>
			</>
		);

	return (
		<nav className='navbar'>
			<div className='logo'>
				<img src={Logo} alt='' />
			</div>
			{navList}
		</nav>
	);
}

export default Navbar;
