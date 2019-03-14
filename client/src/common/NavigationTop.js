import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openSideNav } from './../redux/actions';

const NavigationTop = ({ isOpen, onClickCallback, openSideNav, cartItems }) => {

    return (
        <div className="navigation-top">
            <div className="navigation-title">
                <a href="/" className="app-title">H A V E N</a>
            </div>
            <div className="navigation-controls">
                <img src="/images/icon-search.svg" className="search-trigger" alt="search" />
                <a href="javascript:void(0)" onClick={openSideNav}>
                    <img src="/images/icon-cart.svg" className="cart-open" alt="open cart" />
                    <div className="cart-count">{cartItems.length}</div>
                </a>
            </div>
            <div className="menu-toggle">
                <div className="menu-toggle-dropdown">
                    <a href="javascript:void(0)" onClick={onClickCallback}><img src="/images/icon-menu.svg" className="toggle-menu" alt="open dropdown menu" /></a>
                    <nav className={'dropdown-menu' + (isOpen ? ' open' : '')}>
                        <a href="/about" className="dropdown-link w-dropdown-link">About</a>
                        <a href="/contact" className="dropdown-link w-dropdown-link">Contact</a>
                        <a href="/contact" className="dropdown-link w-dropdown-link">FAQ</a>
                        <a href="/contact" className="dropdown-link w-dropdown-link">Terms &amp; Conditions</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

export default connect(
    mapStateToProps,
    { openSideNav }
)(NavigationTop)