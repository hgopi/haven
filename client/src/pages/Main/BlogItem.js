import React from 'react';

const BlogItem = ({ details }) => {
    return (
        <div className="blog-grid-item">
            <a href={details.link} className="blog-item-link">
                <img src={details.img} className="blog-item-thumbnail" alt={details.title} />
                <div className="blog-item-date">
                    {details.date}
                </div>
                <h4>{details.title}</h4>
            </a>
        </div>
    )
}

export default BlogItem;