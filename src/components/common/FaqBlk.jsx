import React, { useState } from "react";

function FaqBlk({ qst, ans }) {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className={show ? "faq_blk active" : "faq_blk"}>
				<h5 className="fancy" onClick={() => setShow(!show)}>
					{qst}
				</h5>
				{show && (
					<div className="txt">
						<p>{ans}</p>
					</div>
				)}
			</div>
		</>
	);
}

export default FaqBlk;
