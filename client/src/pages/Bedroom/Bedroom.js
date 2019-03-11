import React, { Component, Fragment } from 'react';
import Banner from '../../common/Banner';
import Product from './../../common/Product';
import { Grid } from './../../components';
import Features from '../../common/Features';
import NewsLetter from '../../common/NewsLetter';

const bgImage = 'url(./images/banner-bedroom.jpg)';
const bannerHeading = 'Bedroom';
const bannerDescription = 'Here’s a description of the featured Bedroom or promotion.';

class Bedroom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null
        }
    }

    componentDidMount() {
        fetch('./data/bedroom.json')
            .then(res => res.json())
            .then(res => this.setState({ products: res.Products }));
    }

    render() {
        const { products } = this.state;
        return (
            <Fragment>
                <Banner bgImage={bgImage} heading={bannerHeading} description={bannerDescription} />
                <section>
                    <div className="container">
                        {products ?
                            <Fragment>
                                <Grid>
                                    {products.map(product => <Product details={product} key={product.id} sale={false} />)}
                                </Grid>
                            </Fragment>
                            : <div className="text-center">Loading...</div>
                        }
                    </div>
                </section>
                <div className="horizontal-rule inner"></div>
                <Features />
                <div className="horizontal-rule inner"></div>
                <NewsLetter />
            </Fragment>
        )
    }

}

export default Bedroom;