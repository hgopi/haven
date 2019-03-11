import React, { Component } from 'react';
import './navigation.css';
import { NavigationLinks, NavigationTop } from '.';

const navLinks = [
    { text: 'All', route: '/all' },
    { text: 'Sale', route: '/sale' },
    { text: 'Dining', route: '/dining' },
    { text: 'Living', route: '/living' },
    { text: 'Bedroom', route: '/bedroom' }
]

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            navLinks
        };
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen, navLinks } = this.state;
        return (
            <div className="navigation">
                <div className="container">
                    <NavigationTop isOpen={isOpen} onClickCallback={this.toggleMenu} />
                    <NavigationLinks links={navLinks} />
                </div>
            </div >
        )
    }
};

export default Header;