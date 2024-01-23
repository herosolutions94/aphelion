import React from "react";
import { Link } from "react-router-dom";
import Image from "../common/Image";

function BlogBlock({ src, title, para, date, btn, btn_link }) {
	return (
		<>
			<div className="blog_blk">
				<div className="fig">
					<Link to={btn_link}>
						<Image src={src} alt={title} />
					</Link>
				</div>
				<div className="txt">
					<div className="date">{date}</div>
					<h4 className="fancy">
						<Link to={btn_link}>{title}</Link>
					</h4>
					<p>{para}</p>
					<Link to={btn_link} className="site_btn text">
						{btn}
					</Link>
				</div>
			</div>
		</>
	);
}

export default BlogBlock;
