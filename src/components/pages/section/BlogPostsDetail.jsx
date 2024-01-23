import React from "react";
import { Link } from "react-router-dom";
import Image from "../../common/Image";

function BlogPosts({ data }) {
	return (
		<>
			<section id="blog">
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="in_col">
								<div className="post_blk_detail">
									<div className="fig">
										<Image src={data.details.src} alt="" />
									</div>
									<div className="br"></div>
									<div className="txt">
										<div className="date">{data.details.date}</div>
										<h2 className="fancy">{data.details.title}</h2>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis culpa voluptates, vero quis consectetur ratione! Cumque quidem, cum rerum, molestias eaque odio animi illum, nemo maiores eum eligendi ullam?</p>
										<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati deserunt eligendi nulla nihil consequatur reprehenderit nisi, earum soluta quidem incidunt possimus libero accusamus quis minus, laudantium porro fugiat consequuntur temporibus!</p>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem! Fuga et at nulla corrupti, esse consectetur mollitia ut odit consequuntur a saepe odio repellendus maxime voluptas voluptate nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae excepturi et quas voluptatem sequi eaque quis hic praesentium totam. Distinctio ipsam eveniet, eum nam ab aut illo ut expedita.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col col2">
							<div className="in_col article_wrap">
								{
									data.category.ul != null && data.category.ul != undefined ?
										<div className="ctgry_blk blk">
											<h4 className="color">{data.category.title}</h4>
											<ul>
												{data.category.ul.map((val) => {
													return (
														<li id={val.id} key={val.id}>
															<a href={val.link}>{val.li}</a>
														</li>
													);
												})}
											</ul>
										</div>
										:
										""
								}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogPosts;
