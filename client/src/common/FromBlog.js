import React from 'react';
import BlogItem from './BlogItem';
import { Grid } from './../components';

const FromBlog = ({ blogItems }) => (
    blogItems ? (<section className="section-fromblog">
        <div className="container">
            <h2 className="section-title">From our blog</h2>
            <Grid>
                {blogItems.map((details) => <BlogItem details={details} key={details.id} />)}
            </Grid>
        </div>
    </section>) : <div></div>
);

export default FromBlog;