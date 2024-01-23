import React, { useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import ServicesAll from "./section/ServicesAll";
import Choose from "./section/Choose";

function Services() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("services-page").then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
				blocks: data.blocks,
				services: data.services,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;

	const services = {
		cover: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.banner_heading,
		},
		serve: {
			block: state.services,
		},
		choose: {
			heading: content.section1_detail,
			block: state.blocks,
		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Cover data={services.cover} />
			<ServicesAll data={services.serve} />
			<Choose data={services.choose} />
		</>
	);
}

export default Services;
