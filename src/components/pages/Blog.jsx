import React, { useState, useEffect } from "react";
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import BlogPosts from "./section/BlogPosts";

function Blog() {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({

	});
	useEffect(() => {
		window.scrollTo(0, 3)
		getData("blog-page").then((data) => {
			setState({
				...state,
				content: data.content,
				metatags: data.metatags,
				categories: data.categories,
				blogs: data.blogs,
			});
			setLoading(true);
		});
	}, []);
	let content = state.content;
	if (loading === false) return <div id="loading"> <img src={getSiteImages('/images/loading.gif')} alt="Loading" /></div>;

	const blog = {
		cover: {
			sec_bg: getServerImage('uploads/images/', content.image1, 'thumb_'),
			heading: content.banner_heading,
		},
		posts: {
			block: state.blogs,
			category: {
				title: content.section1_heading,
				ul: state.categories,
			},
		},
	};
	return (
		<>
			{metaTags(state.metatags)}
			<Cover data={blog.cover} />
			<BlogPosts data={blog.posts} />
		</>
	);
}

export default Blog;
