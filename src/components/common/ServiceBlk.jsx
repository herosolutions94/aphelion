import React from "react";
import { Link } from "react-router-dom";

function ServiceBlk({ src, title, link }) {
	return (
		<>
			<div className="serve_blk">
				<div className="fig">
					<Link to={link}>
						<img src={src} alt={title} />
					</Link>
				</div>
				<div className="txt">
					<h5>
						<Link to={link}>{title}</Link>
					</h5>
				</div>
			</div>
		</>
	);
}

export default ServiceBlk;
