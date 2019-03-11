import React, { Component } from 'react';
import './Main.css';
import Product from './../../common/Product';
import Promotion from './../../common/Promotion';
import HowItWorks from './../../common/HowItWorks';
import FromBlog from './../../common/FromBlog';
import Features from './../../common/Features';
import { Grid } from '../../components/Grid';
import { LargeButton } from './../../components'
import NewsLetter from './../../common/NewsLetter';

const Products = [
    { id: 1, title: 'Rest Armchair', mainImage: '/images/armchair-1.jpg', subImage: '/images/armchair-1a.jpg', link: '/product/arm-chair', price: 999, oldPrice: 1499 },
    { id: 2, title: 'Bar Stool', mainImage: '/images/bar-stool-1-p-500.jpeg', subImage: '/images/bar-stool-1b-p-800.jpeg', link: '/product/bar-stool', price: 1299, oldPrice: '' },
    { id: 3, title: 'Coffee Table', mainImage: '/images/coffee-table-1.jpg', subImage: '', link: '/product/coffee-table', price: 1299, oldPrice: '' }
];

const BlogItems = [
    { id: 1, title: 'A look back at 2018’s emerging design trends', date: 'December 31', img: '/images/blog-3-thumb.jpeg', link: '/blog/blog-1' },
    { id: 2, title: 'Interview with designer Bradley Keen', date: 'December 31', img: '/images/blog-5-thumb.jpg', link: '/blog/blog-2' },
    { id: 3, title: 'Collaboration with Dwell Magazine', date: 'December 31', img: '/images/blog-6-thumb.jpg', link: '/blog/blog-3' }
];

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="main-page">
                <section className="section-banner text-white">
                    <div className="banner-image"></div>
                    <div className="banner-container">
                        <h1 className="text-white">Summer Sale</h1>
                        <p>Grab this summer the best deals online at discount</p>
                        <LargeButton>Shop now</LargeButton>
                    </div>
                </section>
                <section className="section-arrivals">
                    <div className="container">
                        <h2 className="section-title">Latest Arrivals</h2>
                        <Grid>
                            {Products.map(product => <Product details={product} key={product.id} />)}
                        </Grid>
                    </div>
                </section>
                <div className="horizontal-rule inner"></div>
                <Promotion />
                <div className="horizontal-rule inner"></div>
                <HowItWorks />
                <FromBlog blogItems={BlogItems} />
                <NewsLetter />
                <div className="horizontal-rule inner"></div>
                <Features />
            </div>
        )
    }

}

export default Main;