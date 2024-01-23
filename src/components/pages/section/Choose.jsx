import React from "react";
import ChooseBlk from "../../common/ChooseBlk";

function Choose({ data }) {
	return (
		<>
			<section id="choose">
				<div className="contain text-center">
					<div className="content">
						<div dangerouslySetInnerHTML={{ __html: data.heading }} />
					</div>
					<div className="flex_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<ChooseBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Choose;
