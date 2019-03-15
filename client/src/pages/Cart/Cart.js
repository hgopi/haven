import { Component } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import * as style from './style';
import { closeSideNav, removeCartItem } from './../../redux/actions';
import { CartItem } from './../../common';
import Link from 'react-router-dom/Link';

const mapStateToProps = (state) => {
    return {
        isNavOpen: state.navigation.isNavOpen,
        cartItems: state.cartItems
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        closeSideNav: () => dispatch(closeSideNav()),
        removeCartItem: (item) => dispatch(removeCartItem(item)),
    }
}

class Cart extends Component {

    stopPropagation = (event) => {
        event.stopPropagation();
    }

    render() {
        const { isNavOpen, cartItems } = this.props;
        const isEmptyCart = cartItems.length === 0;
        return (
            <style.CartContainerWrapper className={isNavOpen ? 'open' : ''} onClick={this.props.closeSideNav}>
                <style.CartContainer className="cart-container" onClick={this.stopPropagation}>
                    <div css={style.cartHeader}>
                        <div css={style.titleWrapper}>
                            <h4 css={style.h4}>Your Cart</h4>
                            <div css={style.badge}>{cartItems.length}</div>
                        </div>
                        <button className="no-style-btn" onClick={this.props.closeSideNav}><img src="/images/icon-cross.svg" alt="close button" /></button>
                    </div>
                    <style.FormWrapper>
                        {isEmptyCart ? <div css={style.emptyState}>
                            <div css={style.emptyStateText}>Your cart is empty.</div>
                            <Link css={style.emptyStateLink} to="/store" onClick={this.props.closeSideNav}>Visit Store</Link>
                        </div> :
                            <CartItem cartItems={cartItems} isEditable={true} onRemove={this.props.removeCartItem} />}
                        {!isEmptyCart && <div css={style.cartFooter}>
                            <div css={style.subTotalWrapper}>
                                <div css={style.subTotaltitle}>Subtotal</div>
                                <div>₹999.00</div>
                            </div>
                            <Link css={style.anchorCheckout} onClick={this.props.closeSideNav} to="/checkout">Continue to Checkout</Link>
                        </div>}
                    </style.FormWrapper>
                </style.CartContainer>
            </style.CartContainerWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Cart);