import React, { Component, Fragment } from 'react';
import { Grid, LargeButton } from '../../components';
import Product from './../../common/Product';
import { connect } from 'react-redux';
import { getAllProducts } from '../../redux/thunk';

class Store extends Component {

    componentDidMount() {
        this.props.dispatch(getAllProducts());
    }

    render() {
        const { products } = this.props;
        return (
            <Fragment>
                <div className="horizontal-rule inner"></div>
                <section>
                    <div className="container">
                        {products ?
                            <Fragment>
                                <Grid>
                                    {products && products.map(product => <Product details={product} key={product._id} />)}
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

const mapStateToPros = (store) => ({
    products: store.products.all
});

export default connect(mapStateToPros)(Store);