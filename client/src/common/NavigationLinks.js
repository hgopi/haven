import React from 'react';
import Link from 'react-router-dom/Link';

const NavigationLinks = ({ links }) => {

    return (
        <div className="navigation-links-container">
            <ul className="navigation-links">
                {links.map((link) => {
                    return (<li className="navigation-link-item" key={link.text}>
                        <Link className="text-large" to={link.route}>{link.text}</Link>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default NavigationLinks;