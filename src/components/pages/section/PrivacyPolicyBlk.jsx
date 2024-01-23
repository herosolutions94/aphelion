import React from "react";

function PrivacyPolicyBlk(props) {
	return (
		<>
			<section id="terms">
				<div className="contain sm">
					<div className="blk ck_editor">
						<div dangerouslySetInnerHTML={{ __html: props.details }} />
					</div>
				</div>
			</section>
		</>
	);
}

export default PrivacyPolicyBlk;
