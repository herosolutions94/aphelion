import React, { useState, useEffect } from "react";
import Banner from "./section/Banner";
import Serve from "./section/Serve";
import Intro from "./section/Intro";
import Choose from "./section/Choose";
import Assets from "./section/Assets";
import Posts from "./section/Posts";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';

function Home(props) {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("home-page").then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
				blocks: data.blocks,
				services: data.services,
				blog: data.blog,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;

	const home = {
		banner: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.banner_heading,
			para: content.banner_short_heading,
			btn_01: content.banner_link_text,
			btn_link_01: content.banner_link_url,
			btn_02: content.banner_link_text1,
			btn_link_02: content.banner_link_url1,
		},
		serve: {
			para: content.section1_detail,
			block: state.services,
		},
		intro: {
			sec_bg: "/images/layer_3.svg",
			para: content.section2_detail,
			btn: content.section2_link_text,
			btn_link: content.section2_link_url,
			src: getServerImage('uploads/images/', content.image2, 'thumb_'),
		},
		choose: {
			heading: content.section3_detail,
			block: state.blocks,
		},
		assets: {
			sec_bg: getServerImage('uploads/images/', content.image3, 'thumb_'),
			para: content.section4_detail,
			btn_img_src: "/images/play_icon.svg",
		},
		posts: {
			heading: content.section5_detail,
			block: state.blog,
		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Banner data={home.banner} />
			<Serve data={home.serve} />
			<Intro data={home.intro} />
			<Choose data={home.choose} />
			<Assets data={home.assets} show={() => props.popup(content.section4_video)} />
			<Posts data={home.posts} />
		</>
	);
}

export default Home;
