import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { getSiteImages, metaTags, getServerImage, getData } from '../../helpers/api';
import Cover from "../common/Cover";
import BlogPosts from "./section/BlogPosts";

function BlogCat() {
    let location = useLocation();
    let pathname = location.pathname;
    let url_arr = pathname.split("/");
    let cat_id = url_arr['2'];
    let ser_slug = url_arr['3'];
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({

    });
    useEffect(() => {
        window.scrollTo(0, 3)
        getData("cat-page", cat_id + "/" + ser_slug).then((data) => {
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
            sec_bg: getServerImage('uploads/categories/', content.image, 'thumb_'),
            heading: content.title,
        },
        posts: {
            block: state.blogs,
            category: {
                title: "Categories",
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

export default BlogCat;
