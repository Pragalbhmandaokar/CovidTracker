import React from "react";
import faq from "../assets/data/faqs.json";

function Faqs() {
	return (
		<>
			<div className='container'>
				<h1 className='title1'>FAQ - Frequently Asked Questions</h1>
			</div>
			<div className='container'>
				{faq.map((item, index) => {
					return (
						<div key={index} className='questions'>
							<div className='heading'>{item.question}</div>
							<div className='subheading'>{item.answer}</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Faqs;
