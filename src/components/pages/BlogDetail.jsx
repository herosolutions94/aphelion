import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import BlogPostsDetail from "./section/BlogPostsDetail";

function Blog() {
	let location = useLocation();
	let pathname = location.pathname;
	let url_arr = pathname.split("/");
	let blog_id = url_arr['2'];
	let ser_slug = url_arr['3'];
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {

		getData("blog-details", blog_id + "/" + ser_slug).then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
				categories: data.categories,
			});
			setLoading(true);
		});

	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;
	const detail = {
		cover: {
			sec_bg: getServerImage('uploads/blog/', content.banner, 'thumb_'),
			heading: content.title,
		},
		posts: {
			details: {
				title: content.title,
				date: content.date,
				src: getServerImage('uploads/blog/', content.image, 'thumb_'),
			},
			category: {
				title: "Categories",
				ul: state.categories,
			},
		},
	};
	return (
		<>
			<Cover data={detail.cover} />
			<BlogPostsDetail data={detail.posts} />
		</>
	);
}

export default Blog;
