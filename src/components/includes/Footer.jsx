import React, { useState, useEffect } from 'react'
import { getData, getServerImage } from "../../helpers/api";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";
let currentTime = new Date()
function Footer() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {

		getData("site-settings").then((data) => {
			setState({
				...state,
				site_settings: data.site_settings,
				social: data.social
			});
			setLoading(true);
		});

	}, []);
	if (loading === false) return '';
	const data = {
		list: [
			{
				id: 1,
				text: "Privacy Policy",
				link: "/privacy-policy",
			},
			{
				id: 2,
				text: "Terms & conditions",
				link: "/terms-conditions",
			},
			{
				id: 3,
				text: "Disclaimer",
				link: "/disclaimer",
			},
		],
	};
	return (
		<>
			<footer>
				<div className="contain">
					<Logo src={getServerImage('uploads/images/', state.site_settings.site_logo)} site_name={state.site_settings.site_name} />
					<Newsletter text={state.site_settings.site_about} />
					<ul className="list">
						{data.list.map((val) => {
							return (
								<li key={val.id}>
									<Link to={val.link}>{val.text}</Link>
								</li>
							);
						})}
					</ul>
					<p className="copyright text-center">
						Copyright © {currentTime.getFullYear()} <Link to="/">{state.site_settings.site_name}.</Link> {state.site_settings.site_copyright}
					</p>
					<SocialLinks social={state.social} />
				</div>
			</footer>
		</>
	);
}

export default Footer;
