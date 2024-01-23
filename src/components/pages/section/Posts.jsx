import React from "react";
import BlogBlock from "../../common/BlogBlock";

function Posts({ data }) {
	return (
		<>
			<section id="posts">
				<div className="contain">
					<h1 className="heading text-center">
						<div dangerouslySetInnerHTML={{ __html: data.heading }} />
					</h1>
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<BlogBlock {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Posts;
