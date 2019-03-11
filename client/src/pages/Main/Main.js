import React, { Component } from 'react';
import './Main.css';
import Product from './components/Product';
import Promotion from './components/Promotion';
import HowItWorks from './components/HowItWorks';
import FromBlog from './components/FromBlog';
import Features from './components/Features';

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
                        <a href="/shop" className="button button-large">Shop now</a>
                    </div>
                </section>
                <section className="section-arrivals">
                    <div className="container">
                        <h2 className="section-title">Latest Arrivals</h2>
                        <div className="product-grid">
                            {Products.map(product => <Product details={product} key={product.id} />)}
                        </div>
                    </div>
                </section>
                <div className="horizontal-rule inner"></div>
                <Promotion />
                <div className="horizontal-rule inner"></div>
                <HowItWorks />
                <FromBlog blogItems={BlogItems} />
                <section className="section-newsletter">
                    <div className="container container-narrow text-center">
                        <h2>Join our mailing list</h2>
                        <p className="text-large">Sign up to receive inspiration, product updates, and special offers from our team.</p>
                        <div className="form">
                            <form name="emailForm" className="subscribe-form">
                                <input type="email" className="form-input form-input-large subscribe-form-input" placeholder="Email Address" />
                                <input type="submit" value="Subscribe" className="button button-large" />
                            </form>
                            <div className="form-error">Please enter a valid email</div>
                            <div className="form-done">
                                <p>Thank you! Your submission has been received!</p>
                            </div>
                            <div className="form-fail">
                                <p>Oops! Something went wrong while submitting the form.</p>
                            </div>
                        </div>
                        <div className="text-small">
                            We’ll never share your details. View our <a href="/privacy-policy">Privacy Policy</a>
                        </div>
                    </div>
                </section>
                <div className="horizontal-rule inner"></div>
                <Features />
            </div>
        )
    }

}

export default Main;