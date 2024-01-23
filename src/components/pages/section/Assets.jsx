import React from "react";
import { short_text } from '../../../helpers/api';

function Assets(props) {
	const { data } = props;
	return (
		<>
			<section id="assets" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="flex_blk">
						<div className="content text-center">
							<div dangerouslySetInnerHTML={{ __html: data.para }} />
							<button type="button" className="play_btn" onClick={props.show}>
								<img src={data.btn_img_src} alt={short_text(data.para, 20)} />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Assets;
