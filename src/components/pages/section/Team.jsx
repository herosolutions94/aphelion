import React from "react";
import TeamBlock from "../../common/TeamBlock";

function Team({ data }) {
	return (
		<>
			<section id="team">
				<div className="contain text-center">
					<div className="content">
						<h1>
							{data.heading} <strong>{data.heading_ex}</strong>
						</h1>
					</div>
					<div className="main_row flex_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<TeamBlock {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Team;
