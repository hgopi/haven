import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const CartContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
    background-color: rgba(9, 14, 29, .7);    
    opacity: 0;
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -2;
    text-align: unset;
    transition: opacity 500ms ease;
    &.open {
        display: block;
        opacity: 1;
        z-index: 2;
        & .cart-container {
            transform: translateX(0px);
        }
    }
}
`

export const CartContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 480px;
    min-width: 320px;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, .25);
    padding-right: 2.25rem;
    padding-left: 2.25rem;
    height: 100%;
    transform: translateX(100%);
    margin-left: auto;
    transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
`;


export const emptyState = css`
    flex-direction: column;
    text-align: center;
`

export const emptyStateText = css`
    margin-bottom: 1rem;
    font-size: 1.25rem;
    margin-top: 1rem;
`;

export const emptyStateLink = css`
    border-radius: 800px;
    display: inline-block;
    height: 3rem;
    padding: 0px 2rem;
    text-align: center;
    transition: opacity 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;
    color: #fff;
    font-size: 0.875rem;
    line-height: 3rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background-color: #090e1d;
    text-decoration: none;
    &:hover {
        opacity: 0.9;
        color: #fff;
    }
`;

export const cartForm = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
`

export const cartFooter = css`
    padding: 1.5rem 0px;
    border-top: 1px solid rgba(9, 14, 29, .1);
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
`

export const subTotalWrapper = css`
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;
    align-items: baseline;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
`;

export const subTotaltitle = css`
    color: #090e1d;
    font-size: 1rem;
    font-weight: 600;
`;

export const anchorCheckout = css`
    display: block;
    height: 3rem;
    padding: 0px 2rem;
    text-align: center;
    border-radius: 3px;
    background-color: #090e1d;
    transition: opacity 200ms ease;
    color: #fff;
    font-size: 0.875rem;
    line-height: 3rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border: 0;
    outline: 0;
    &:hover {
        opacity: 0.9;
        color: #fff;
    }
`

export const cartHeader = css`
    display: flex;
    padding: 1.5rem 0px;
    justify-content: space-between;
    flex-grow: 0;
    flex-shrink: 0;
    border-bottom: 1px solid #e6e6e6;
    align-items: center;
`
export const titleWrapper = css`
    display: flex;
    align-items: center;
`

export const h4 = css`
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    font-size: 1.25rem;
`

export const badge = css`
    width: auto;
    height: 1.5rem;
    min-width: 1.5rem;
    margin-left: 0.5rem;
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    text-align: center;
    border-radius: 3px;
    background-color: #dc3545;
    color: #fff;
    font-size: 0.75rem;
    line-height: 1.5rem;
    font-weight: 600;
`
