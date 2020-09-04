import React from "react";
import symptons from "../assets/data/symptoms.json";

const Symptons = () => {
	return (
		<>
			<div className='container'>
				<h1 className='title1'>Coivd Symptons</h1>
			</div>
			<div className='container'>
				{symptons.map((item, index) => {
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

export default Symptons;
