import React from 'react';

const NavigationLinks = ({ links }) => {

    return (
        <div className="navigation-links-container">
            <ul className="navigation-links">
                {links.map((link) => {
                    return (<li className="navigation-link-item" key={link.text}>
                        <a className="text-large" href={link.route}>{link.text}</a>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default NavigationLinks;