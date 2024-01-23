import React from "react";
import ContactForm from "../../common/ContactForm";
import Image from "../../common/Image";

function ContactUs({ data }) {
	return (
		<>
			<section id="contact">
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="in_col">
								<h3 className="heading color">{data.heading}</h3>
								<div dangerouslySetInnerHTML={{ __html: data.para }} />
								<div className="br"></div>
								<h6 className="heading">{data.subheading}</h6>
								<ul className="info_lst">
									{data.info_blk.map((val) => {
										return (
											<li key={val.id}>
												<div className="icon">
													<Image src={val.icon} alt={val.title} />
												</div>
												<div className="txt">
													<strong>{val.title}</strong>
													<a href={val.link}>{val.text}</a>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col col2">
							<div className="in_col">
								<ContactForm formData={data.form} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default ContactUs;
