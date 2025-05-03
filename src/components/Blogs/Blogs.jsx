import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handelBookMark, handelMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])

    // console.log(blogs);
    return (
        <div>
            <h1 className='text-3xl'>Total : {blogs.length}</h1>
            <div className="all-blogs grid grid-cols-2 gap-4">
                {
                    blogs.map((blog) => <Blog blog={blog} handelMarkAsRead={handelMarkAsRead} handelBookMark={handelBookMark}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;