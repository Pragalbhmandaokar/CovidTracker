import React from "react";
import preventions from "../assets/data/prevention.json";

const Preventions = () => {
	return (
		<>
			<div className='container'>
				<h1 className='title1'>Covid Prevention</h1>
			</div>
			<div className='container'>
				{preventions.map((item, index) => {
					return (
						<div key={index} className='questions'>
							<div className='heading'>{item.title}</div>
							<div className='subheading'>{item.sub}</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Preventions;
