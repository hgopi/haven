import React, { Component, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Aside from '../../Components/Aside';
import Main from '../../Components/Main';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import NewProduct from '../NewProduct/NewProduct';
import { bindActionCreators } from 'redux';
import { getAllProducts } from './../../Redux/thunks';

const mainSection = css`
    margin-left: 170px;
    position: relative;
    height: 100%;
    padding: 24px 12px;
`;

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        redirect: false
    }

    componentDidMount() {
        fetch('/api/checkToken')
            .then(res => {
                if (res.status === 200) {
                    this.setState({ loading: false });
                    this.props.getAllProducts();
                } else {
                    throw Error(res.error);
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ loading: false, redirect: true })
            })
    }

    render() {

        const { loading, redirect } = this.state;
        const { match } = this.props;
        const { products } = this.props;
        console.log(products);

        if (loading) {
            return null;
        }

        if (redirect) {
            return <Redirect to="/" />
        }

        return (
            <Fragment>
                <Aside />
                <section css={mainSection}>
                    <Switch>
                        <Route exact path={`${match.url}/`} component={Main} />
                        <Route exact path={`${match.url}/new-product`} component={NewProduct} />
                    </Switch>
                </section>
                <section>
                    {products.length && }
                </section>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllProducts,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);