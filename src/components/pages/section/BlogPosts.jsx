import React from "react";
import { Link } from "react-router-dom";
import BlogBlock from "../../common/BlogBlock";

function BlogPosts({ data }) {
	return (
		<>
			<section id="blog">
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="in_col">
								<div className="flex_row sub_row">
									{data.block.map((val) => {
										return (
											<div className="col" key={val.id}>
												<BlogBlock {...val} />
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div className="col col2">
							<div className="in_col article_wrap">
								<div className="ctgry_blk blk">
									<h4 className="color">{data.category.title}</h4>
									<ul>
										{data.category.ul.map((val) => {
											return (
												<li key={val.id}>
													<a href={val.link}>{val.li}</a>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogPosts;
