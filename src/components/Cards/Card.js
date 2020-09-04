import React from "react";
import classNames from "classnames";
import * as Icon from "react-feather";
import CountUp from "react-countup";

const Card = ({ value, title, bg, inc }) => {
	const classname = classNames("wrapper", bg);
	return (
		<div className='card'>
			<div className={classname}>
				<div className='wapper-left'>
					<div className='widget-heading'>{title}</div>
					<div className='widget-subheading'>
						<Icon.ArrowUp height='12' width='12' />
						<CountUp start={0} end={inc} />
					</div>
				</div>
				<div className='widget-right'>
					<CountUp
						className='widget-count'
						start={0}
						end={+value}
						duration={2.75}
						separator=','
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;
