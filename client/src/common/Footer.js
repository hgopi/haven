import React from 'react';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer-column">
                <div className="site-details">
                    <a href="/" className="w-inline-block footer-link">H A V E N</a>
                    <p className="site-details">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="social-links">
                        <a href="#" className="social-link">
                            <img src="/images/social-twitter.svg" />
                        </a>
                        <a href="#" className="social-link">
                            <img src="/images/social-facebook.svg" />
                        </a>
                        <a href="#" className="social-link">
                            <img src="/images/social-pinterest.svg" />
                        </a>
                        <a href="#" className="social-link">
                            <img src="/images/social-instagram.svg" />
                        </a>
                    </div>
                </div>
                <div className="footer-menus">
                    <div className="footer-columns">
                        <h5 className="text-white">Shop</h5>
                        <ul className="menu-column">
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">All</a>
                            </li>
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">Sale</a>
                            </li>
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">Dining</a>
                            </li>
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">Living</a>
                            </li>
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">Bedroom</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-columns">
                        <h5 className="text-white">Company</h5>
                        <ul className="menu-column">
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">About</a>
                            </li>
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">Blog</a>
                            </li>
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">Contact us</a>
                            </li>
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">FAQ</a>
                            </li>
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-columns">
                        <h5 className="text-white">Policy</h5>
                        <ul className="menu-column">
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">Return</a>
                            </li>
                            <li className="menu-column-item">
                                <a href="/store" className="text-link-white">Sales</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="horizontal-rule horizontal-rule-light"></div>
            <div className="container">
                <div className="footer-lower">
                    <div className="text-small footer-copyright">© 2018 All Rights Reserved.</div>
                    <div className="payment-badge">
                        <div className="text-tiny">Secure payment by</div>
                        <img src="/images/logo-stripe.svg" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;