import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { connect } from 'react-redux';
import * as style from './style';
import { closeSideNav, removeCartItem } from './../../redux/actions';

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

    render() {
        const { isNavOpen, cartItems } = this.props;
        const isEmptyCart = cartItems.length === 0;
        return (
            <style.CartContainerWrapper className={isNavOpen ? 'open' : ''} onClick={this.props.closeSideNav}>
                <style.CartContainer className="cart-container">
                    <div css={style.cartHeader}>
                        <div css={style.titleWrapper}>
                            <h4 css={style.h4}>Your Cart</h4>
                            <div css={style.badge}>{cartItems.length}</div>
                        </div>
                        <a href="javascript:void(0)" onClick={this.props.closeSideNav}><img src="/images/icon-cross.svg" /></a>
                    </div>
                    <style.FormWrapper>
                        {isEmptyCart ? <div css={style.emptyState}>
                            <div css={style.emptyStateText}>Your cart is empty.</div>
                            <a css={style.emptyStateLink} href="/store">Visit Store</a>
                        </div> :
                            <div css={style.cartList}>
                                {cartItems.map((item, index) => {
                                    return (<div css={style.cartItem} key={index}>
                                        <img css={style.cartItemImage} src={item.mainImage} />
                                        <div css={style.cartItemDetails}>
                                            <div css={style.cartItemTitle}>{item.title}</div>
                                            <div>₹{item.price}</div>
                                            <a href="#" css={style.cartItemRemove}>Remove</a>
                                        </div>
                                        <input css={style.cartQuanitity} type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
                                    </div>)
                                })}
                            </div>}
                        {!isEmptyCart && <div css={style.cartFooter}>
                            <div css={style.subTotalWrapper}>
                                <div css={style.subTotaltitle}>Subtotal</div>
                                <div>₹999.00</div>
                            </div>
                            <a css={style.anchorCheckout} href="/checkout">Continue to Checkout</a>
                        </div>}
                    </style.FormWrapper>
                </style.CartContainer>
            </style.CartContainerWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Cart);