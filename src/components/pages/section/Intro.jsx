import React from "react";
import { short_text } from '../../../helpers/api';
import { Link } from "react-router-dom";

function Intro({ data }) {
	return (
		<>
			<section id="intro" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="flex_row">
						<div className="col col1">
							<div className="content">
								<div dangerouslySetInnerHTML={{ __html: data.para }} />

								<div className="btn_blk">
									<Link to={data.btn_link} className="site_btn lg round">
										{data.btn}
									</Link>
								</div>
							</div>
						</div>
						<div className="col col2">
							<div className="in_col">
								<div className="img">
									<img src={data.src} alt={short_text(data.para, 20)} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Intro;
