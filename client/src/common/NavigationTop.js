import React from 'react';
import { connect } from 'react-redux';
import { openSideNav } from './../redux/actions';
import { Link } from "react-router-dom";

const NavigationTop = ({ isOpen, onClickCallback, openSideNav, cartItems }) => {

    return (
        <div className="navigation-top">
            <div className="navigation-title">
                <Link to="/" className="app-title">H A V E N</Link>
            </div>
            <div className="navigation-controls">
                <img src="/images/icon-search.svg" className="search-trigger" alt="search" />
                <button className="no-style-btn" onClick={openSideNav}>
                    <img src="/images/icon-cart.svg" className="cart-open" alt="open cart" />
                    <div className="cart-count">{cartItems.length}</div>
                </button>
            </div>
            <div className="menu-toggle">
                <div className="menu-toggle-dropdown">
                    <button className="no-style-btn" onClick={onClickCallback}><img src="/images/icon-menu.svg" className="toggle-menu" alt="open dropdown menu" /></button>
                    <nav className={'dropdown-menu' + (isOpen ? ' open' : '')}>
                        <Link onClick={onClickCallback} to="/about" className="dropdown-link w-dropdown-link">About</Link>
                        <Link onClick={onClickCallback} to="/contact" className="dropdown-link w-dropdown-link">Contact</Link>
                        <Link onClick={onClickCallback} to="/faq" className="dropdown-link w-dropdown-link">FAQ</Link>
                        <Link onClick={onClickCallback} to="/legal" className="dropdown-link w-dropdown-link">Terms &amp; Conditions</Link>
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