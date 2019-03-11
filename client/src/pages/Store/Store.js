import React, { Component, Fragment } from 'react';
import { Grid, LargeButton } from '../../components';
import Product from './../../common/Product';

class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null
        }
    }

    componentDidMount() {
        fetch('./data/products.json')
            .then(res => res.json())
            .then(res => this.setState({ products: res.Products }));
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
                                    {products.map(product => <Product details={product} key={product.id} />)}
                                </Grid>
                                <div className="text-center">
                                    <LargeButton>Next</LargeButton>
                                </div>
                            </Fragment>
                            : <div className="text-center">Loading...</div>
                        }
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Store;