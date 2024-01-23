import React from "react";
import FaqBlk from "../../common/FaqBlk";

function Accordion({ data }) {
	return (
		<>
			<section id="faq">
				<div className="contain">
					<div className="faq_lst">
						{data.block.map((val) => {
							// const { id } = val;
							return <FaqBlk key={val.id} {...val} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Accordion;
