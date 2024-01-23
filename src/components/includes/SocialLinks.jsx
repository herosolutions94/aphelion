import React from "react";
import { getSiteImages } from '../../helpers/api';
// import { Link } from "react-router-dom";

function SocialLinks(props) {
	return (
		<>
			<ul className="social_links">
				{
					props != '' && props.social != undefined && props != null && props.social.facebook != '' ?
						<li>
							<a href={props.social.facebook} target="_blank" rel="noreferrer">
								<img src={getSiteImages("/images/social-facebook.svg")} alt={props.social.facebook} />
							</a>
						</li>
						:
						""
				}
				{
					props != '' && props.social != undefined && props != null && props.social.instagram != '' ?
						<li>
							<a href={props.social.instagram} target="_blank" rel="noreferrer">
								<img src={getSiteImages("/images/social-instagram.svg")} alt={props.social.instagram} />
							</a>
						</li>
						:
						""
				}
				{
					props != '' && props.social != undefined && props != null && props.social.youtube != '' ?
						<li>
							<a href={props.social.youtube} target="_blank" rel="noreferrer">
								<img src={getSiteImages("/images/social-youtube.svg")} alt={props.social.youtube} />
							</a>
						</li>
						:
						""
				}
				{
					props != '' && props.social != undefined && props != null && props.social.twitter != '' ?
						<li>
							<a href={props.social.twitter} target="_blank" rel="noreferrer">
								<img src={getSiteImages("/images/social-twitter.svg")} alt={props.social.twitter} />
							</a>
						</li>
						:
						""
				}
			</ul>
		</>
	);
}

export default SocialLinks;
