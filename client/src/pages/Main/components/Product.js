import React from 'react';

const Product = ({ details }) => {
    return (
        <div className="product-grid-item">
            <a href={details.link} className="product-link">
                <div className="product-image">
                    <img className={(details.subImage ? 'hidden' : '')} src={details.mainImage} alt={details.title} />
                    <div className={'multi-images' + (details.subImage ? '' : ' hidden')}>
                        <img className="item-image" src={details.mainImage} alt={details.title} />
                        <img className="item-image-hover" src={details.subImage} alt={details.title} />
                    </div>
                </div>
                <div className="product-text">
                    <h5>{details.title}</h5>
                    {details.oldPrice ? <div className="price-emphasis">₹{details.oldPrice}</div> : ''}
                    <div className="price">₹{details.price}</div>
                </div>
            </a>
        </div>
    )
}

export default Product;