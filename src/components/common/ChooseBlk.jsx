import React from "react";

function ChooseBlk({ icon, title, para }) {
	return (
		<>
			<div className="choose_blk">
				<div className="ico">
					<img src={icon} alt={title} />
				</div>
				<div className="txt">
					<h4>{title}</h4>
					<p>{para}</p>
				</div>
			</div>
		</>
	);
}

export default ChooseBlk;
