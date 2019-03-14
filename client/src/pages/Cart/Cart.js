import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { connect } from 'react-redux';
import * as style from './style';
import { closeSideNav } from './../../redux/actions';

const mapStateToProps = (state) => {
    return { isNavOpen: state.isNavOpen }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        closeSideNav: () => dispatch(closeSideNav())
    }
}

class Cart extends Component {

    state = {
        isOpen: false
    };

    toggleSideNav() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        console.log(this.props);
        const { isOpen } = this.state;
        return (
            <style.CartContainerWrapper className={isOpen ? 'open' : ''}>
                <style.CartContainer className="cart-container">
                    <div css={style.cartHeader}>
                        <div css={style.titleWrapper}>
                            <h4 css={style.h4}>Your Cart</h4>
                            <div css={style.badge}>2</div>
                        </div>
                        <a href="javascript:v"><img src="/images/icon-cross.svg" /></a>
                    </div>
                    <style.FormWrapper>
                        <div css={style.emptyState} style={{ display: 'none' }}>
                            <div css={style.emptyStateText}>Your cart is empty.</div>
                            <a css={style.emptyStateLink} href="/store">Visit Store</a>
                        </div>
                        <div css={style.cartList}>
                            <div css={style.cartItem}>
                                <img css={style.cartItemImage} src="/images/armchair-1a.jpg" />
                                <div css={style.cartItemDetails}>
                                    <div css={style.cartItemTitle}>Dana Dining Chair</div>
                                    <div>₹999</div>
                                    <a href="#" css={style.cartItemRemove}>Remove</a>
                                </div>
                                <input css={style.cartQuanitity} type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
                            </div>
                        </div>
                        <div css={style.cartFooter}>
                            <div css={style.subTotalWrapper}>
                                <div css={style.subTotaltitle}>Subtotal</div>
                                <div>₹999.00</div>
                            </div>
                            <a css={style.anchorCheckout} href="/checkout">Continue to Checkout</a>
                        </div>
                    </style.FormWrapper>
                </style.CartContainer>
            </style.CartContainerWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Cart);