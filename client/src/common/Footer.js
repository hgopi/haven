import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer-column">
                <div className="site-details">
                    <Link to="/" className="w-inline-block footer-link">H A V E N</Link>
                    <p className="site-details">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="social-links">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.twitter.com" className="social-link">
                            <img src="/images/social-twitter.svg" alt="twitter" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com" className="social-link">
                            <img src="/images/social-facebook.svg" alt="facebook" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://pinterest.com" className="social-link">
                            <img src="/images/social-pinterest.svg" alt="pinterest" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://instagram.com" className="social-link">
                            <img src="/images/social-instagram.svg" alt="instagram" />
                        </a>
                    </div>
                </div>
                <div className="footer-menus">
                    <div className="footer-columns">
                        <h5 className="text-white">Shop</h5>
                        <ul className="menu-column">
                            <li className="menu-column-item">
                                <Link to="/store" className="text-link-white">All</Link>
                            </li>
                            <li className="menu-column-item">
                                <Link to="/sale" className="text-link-white">Sale</Link>
                            </li>
                            <li className="menu-column-item">
                                <Link to="/dining" className="text-link-white">Dining</Link>
                            </li>
                            <li className="menu-column-item">
                                <Link to="/living" className="text-link-white">Living</Link>
                            </li>
                            <li className="menu-column-item">
                                <Link to="/bedroom" className="text-link-white">Bedroom</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-columns">
                        <h5 className="text-white">Company</h5>
                        <ul className="menu-column">
                            <li className="menu-column-item">
                                <Link to="/about" className="text-link-white">About</Link>
                            </li>
                            <li className="menu-column-item">
                                <Link to="/contact" className="text-link-white">Contact us</Link>
                            </li>
                            <li className="menu-column-item">
                                <Link to="/faq" className="text-link-white">FAQ</Link>
                            </li>
                            <li className="menu-column-item">
                                <Link to="/legal" className="text-link-white">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-columns">
                        <h5 className="text-white">Policy</h5>
                        <ul className="menu-column">
                            <li className="menu-column-item">
                                <Link to="/legal" className="text-link-white">Return</Link>
                            </li>
                            <li className="menu-column-item">
                                <Link to="/legal" className="text-link-white">Sales</Link>
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
                        <img src="/images/logo-stripe.svg" alt="secure payment icon" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;