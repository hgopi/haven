import React from 'react';
import { GridItem, Img } from './../components';

const BlogItem = ({ details }) => {
    return (
        <GridItem>
            <a href={details.link} className="blog-item-link">
                <Img src={details.img} className="blog-item-thumbnail" alt={details.title} />
                <div className="blog-item-date">
                    {details.date}
                </div>
                <h4>{details.title}</h4>
            </a>
        </GridItem>
    )
}

export default BlogItem;