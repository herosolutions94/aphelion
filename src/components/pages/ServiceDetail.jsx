import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import ServicesDetailBlk from "./section/ServicesDetailBlk";

function ServiceDetail() {
	let location = useLocation();
	let pathname = location.pathname;
	let url_arr = pathname.split("/");
	let service_id = url_arr['2'];
	let ser_slug = url_arr['3'];
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {

		getData("service-details", service_id + "/" + ser_slug).then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
			});
			setLoading(true);
		});

	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;
	const detail = {
		cover: {
			sec_bg: getServerImage('uploads/services/', content.banner, 'thumb_'),
			heading: content.title,
		},
		service: {
			src: getServerImage('uploads/services/', content.image, 'thumb_'),
			heading: content.title,
			para: content.details,
		},
	};
	return (
		<>
			<Cover data={detail.cover} />
			<ServicesDetailBlk data={detail.service} />
		</>
	);
}

export default ServiceDetail;
