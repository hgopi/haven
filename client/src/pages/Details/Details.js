import React, { Component, Fragment } from 'react';
import { ProductDetailsList, BreadCrumb, ProductOtherDetails } from './../../common';
import { TwoColGrid, GridItem1, GridItem2, Img } from '../../components';
import { addCartItem, openSideNav } from './../../redux/actions/';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addCartItem: (item) => dispatch(addCartItem(item)),
        openSideNav: () => dispatch(openSideNav())
    }
}

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.match.params.name,
            match: {},
            showMainImage: true
        }
    }

    componentDidMount() {
        const { name } = this.state;
        fetch('/data/all-products.json').then(res => res.json())
            .then((res) => {
                const match = res.Products.find((product) => product.link === '/product/' + name);
                if (match) {
                    this.setState({ match });
                }
            });
    }

    toggleImage = () => {
        this.setState({
            showMainImage: !this.state.showMainImage
        })
    }

    addCartItem = () => {
        this.props.addCartItem(this.state.match);
        this.props.openSideNav();
    }

    render() {
        const { name } = this.state;
        const { showMainImage } = this.state;
        const { category, title, mainImage, subImage, price, description } = this.state.match;
        const { details, otherDetails } = this.state.match;
        return (
            <Fragment>
                <div className="horizontal-rule inner"></div>
                <div className="container">
                    <BreadCrumb path={[category, title]} />
                    <section className="product-description">
                        <TwoColGrid>
                            <GridItem1>
                                <div className="product-images">
                                    {showMainImage && <Img src={mainImage} />}
                                    {subImage && !showMainImage && <Img src={subImage} />}
                                </div>
                                <div className="product-images-gallery">
                                    <div className="image-gallery">
                                        <Img onClick={this.toggleImage} src={mainImage} />
                                    </div>
                                    {subImage && <div className="image-gallery">
                                        <Img onClick={this.toggleImage} src={subImage} />
                                    </div>}
                                </div>
                            </GridItem1>
                            <GridItem2>
                                <div className="product-title">
                                    <h2>{title}</h2>
                                    <div className="price">₹{price}</div>
                                </div>
                                <div className="product-description">
                                    {description}
                                </div>
                                <div className="horizontal-rule product-horizontal-rule"></div>
                                {details && <ProductDetailsList details={details} />}
                                {otherDetails && <ProductOtherDetails details={otherDetails} />}
                                <div className="place-order">
                                    <input className="place-order-input" type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
                                    <button className="btn-addtocart" onClick={this.addCartItem}>Add to Cart</button>
                                </div>
                            </GridItem2>
                        </TwoColGrid>
                    </section>
                </div>
            </Fragment>
        )
    }

}

export default connect(mapStateToProps, mapDispatchtoProps)(Details);