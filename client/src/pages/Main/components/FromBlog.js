import React from 'react';
import BlogItem from '../BlogItem';

const FromBlog = ({ blogItems }) => (
    blogItems ? (<section className="section-fromblog">
        <div className="container">
            <h2 className="section-title">From our blog</h2>
            <div className="blog-grid">
                {blogItems.map((details) => <BlogItem details={details} key={details.id} />)}
            </div>
        </div>
    </section>) : <div></div>
);

export default FromBlog;