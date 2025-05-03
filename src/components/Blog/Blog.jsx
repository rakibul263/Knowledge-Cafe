import React from 'react';
import { BiSolidBookmarkStar } from "react-icons/bi";


const Blog = ({blog, handelBookMark, handelMarkAsRead}) => {
    // console.log(handelBookMark);
    // console.log(blog);
    
    return (
        <div className='m-2'>
            <h1>{blog.id}</h1>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={blog.cover}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author flex justify-around item-center">
                        <h3>{blog.author}</h3>
                        <img className='w-16' src={blog.author_img} alt="" />
                        <button onClick={()=>handelBookMark(blog)}><BiSolidBookmarkStar size={25} /></button>
                    </div>
                    <h2 className="card-title">{blog.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptate?</p>
                    <div className='flex'>
                    {
                        blog.hashtags.map(has => <p>{has}</p>)
                    }
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={()=>handelMarkAsRead(blog.reading_time, blog.id)}>Mark As Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;