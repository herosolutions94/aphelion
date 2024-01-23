import React from "react";
import ServiceBlk from "../../common/ServiceBlk";

function ServicesAll({ data }) {
	return (
		<>
			<section id="serve" data-service>
				<div className="contain text-center">
					<div className="flex_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<ServiceBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default ServicesAll;
