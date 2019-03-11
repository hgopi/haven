import React, { Component, Fragment } from 'react';
import { Grid } from '../../components';
import Product from './../../common/Product';
import Features from './../../common/Features';
import NewsLetter from './../../common/NewsLetter';

class Sale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null
        }
    }

    componentDidMount() {
        fetch('./data/sale.json')
            .then(res => res.json())
            .then(res => this.setState({ products: res.Products }))
    }

    render() {
        const { products } = this.state;
        return (
            <Fragment>
                <div className="horizontal-rule inner"></div>
                <section>
                    <div className="container">
                        {products ?
                            <Fragment>
                                <Grid>
                                    {products.map(product => <Product details={product} key={product.id} sale={true} />)}
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

export default Sale;