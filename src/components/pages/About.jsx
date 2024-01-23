import React, { useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import Intro from "./section/Intro";
import Assets from "./section/Assets";
import Team from "./section/Team";

function About(props) {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("about-page").then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
				team: data.team,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;

	const about = {
		cover: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.banner_heading,
		},
		intro: {
			para: content.section1_detail,
			btn: content.section1_link_text,
			btn_link: content.section1_link_url,
			src: getServerImage('uploads/images/', content.image2, 'thumb_'),
		},
		assets: {
			sec_bg: getServerImage('uploads/images/', content.image3, 'thumb_'),
			para: content.section2_detail,
			btn_img_src: "/images/play_icon.svg",
		},
		team: {
			heading: "Team ",
			heading_ex: "Member",
			block: state.team,
		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Cover data={about.cover} />
			<Intro data={about.intro} />
			<Assets data={about.assets} show={() => props.popup(content.section2_video)} />
			<Team data={about.team} />
		</>
	);
}

export default About;
