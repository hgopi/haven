import React from 'react';
import { GridItem, Img, Anchor, Badge } from './../components';

const Product = ({ details, sale = false }) => {
    return (
        <GridItem>
            <Anchor to={details.link}>
                <div className="product-image">
                    <img className={(details.subImage ? 'hidden' : '')} src={details.mainImage} alt={details.title} />
                    <div className={'multi-images' + (details.subImage ? '' : ' hidden')}>
                        <Img className="item-image" src={details.mainImage} alt={details.title} />
                        <img className="item-image-hover" src={details.subImage} alt={details.title} />
                    </div>
                </div>
                <div className="product-text">
                    <h5>{details.title}</h5>
                    {details.oldPrice ? <div className="price-emphasis">₹{details.oldPrice}</div> : ''}
                    <div className="price">₹{details.price}</div>
                </div>
                {sale && <Badge>Sale</Badge>}
            </Anchor>
        </GridItem>
    )
}

export default Product;