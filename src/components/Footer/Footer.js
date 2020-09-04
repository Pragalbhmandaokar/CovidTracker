import React from "react";
import * as Icon from "react-feather";

const Footer = () => {
	return (
		<footer className='footer'>
			<h2 className='title1'>
				<a href='/'>MH34 Coivd Tracker</a>
			</h2>
			<p className='title1'>This is not a official website.</p>
			<div className='footer-links'>
				<a href='https://www.instagram.com/mh34corona/'>
					<Icon.Instagram color='orange' />
				</a>
				<a href='https://www.facebook.com/mh34corona'>
					<Icon.Facebook color='#1877f2' />
				</a>
				<a href='https://twitter.com/mh34corona'>
					<Icon.Twitter color='#71c9f8' />
				</a>
				<a href='https://github.com/ameykhaire/mh34-covid-tracker'>
					<Icon.GitHub />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
