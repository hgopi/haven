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
import { connect } from 'react-redux';
import { getLatestProducts } from '../../redux/thunk';

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

    componentDidMount() {
        this.props.dispatch(getLatestProducts());
    }

    render() {
        const { latest } = this.props;
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
                            {latest && latest.map(product => <Product details={product} key={product._id} />)}
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

const mapStateToProps = (state) => ({
    latest: state.products.latest
});

export default connect(mapStateToProps)(Main);
