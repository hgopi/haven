/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const cartList = css`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    overflow: auto;
    padding: 0px;
`

const cartItem = css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(9, 14, 29, .1);
`;

const cartItemImage = css`
    width: 100px;
    height: auto;
`;

const cartItemDetails = css`
    display: block;
    padding-right: 1rem;
    padding-left: 1rem;
    flex-grow: 1;
`;

const cartItemTitle = css`
    margin-bottom: 0.25rem;
    font-size: 1rem;
    color: #333;
    font-weight: 700;
`

const cartItemRemove = css`
    margin-top: 1.5rem;
    display: block;
    font-size: 0.875rem;
`

const cartQuanitity = css`
    border-color: #e8e9ea;
    background-color: #fff;
    transition: border-color 200ms ease;
    border: 1px solid #e8e9ea;
    color: #333;
    display: block;
    font-size: 14px;
    height: 38px;
    line-height: 20px;
    margin-bottom: 10px;
    padding-top: 8px;
    padding-right: 6px;
    padding-bottom: 8px;
    padding-left: 12px;
    width: 60px;
    appearance: none;
    outline: 0;
`

const CartItems = (props) => (
    <div css={cartList}>
        {props.cartItems.map((item, index) => {
            return (<div css={cartItem} key={index}>
                <img css={cartItemImage} src={item.mainImage} alt={item.title} />
                {props.isEditable ? (<div css={cartItemDetails}>
                    <div css={cartItemTitle}>{item.title}</div>
                    <div>₹{item.price}</div>
                    <button className="no-style-btn" css={cartItemRemove} onClick={e => props.onRemove(item)}>Remove</button>
                </div>) : (<div css={cartItemDetails}>
                    <div css={cartItemTitle}>{item.title}</div>
                    <div>Quantity: 1</div>
                </div>)}
                {props.isEditable ?
                    (<input css={cartQuanitity} type="number" id="quantity" name="quantity" min="1" defaultValue="1" />)
                    : <div>₹{item.price}</div>}

            </div>)
        })}
    </div>
)

export default CartItems;