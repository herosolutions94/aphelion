import React from "react";

function ServicesDetailBlk({ data }) {
	return (
		<>
			<section id="serve" data-detail>
				<div className="contain text-center">
					<div className="image">
						<img src={data.src} alt={data.heading} />
					</div>
					<div className="detail">
						<h4>{data.subtitle}</h4>
						<div dangerouslySetInnerHTML={{ __html: data.para }} />
					</div>
				</div>
			</section>
		</>
	);
}

export default ServicesDetailBlk;
