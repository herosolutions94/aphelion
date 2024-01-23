import React from "react";
import Image from "../common/Image";
import SocialLinks from "../includes/SocialLinks";

function TeamBlock({ title, subtitle, src, social }) {
	return (
		<>
			<div className="team_blk">
				<div className="fig">
					<Image src={src} alt={title} />
				</div>
				<div className="txt">
					<h5>{title} </h5>
					<p>{subtitle} </p>
					<SocialLinks social={social} />
				</div>
			</div>
		</>
	);
}

export default TeamBlock;
