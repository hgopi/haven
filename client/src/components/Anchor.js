import styled from '@emotion/styled';
import Link from 'react-router-dom/Link';

const Anchor = styled(Link)`
    position: relative;
    display: inline-block;
    &:hover .item-image {
        opacity: 0;
    }
    @media (max-width: 479px) {
        display: flex;
        align-items: center;
        margin-bottom: 0rem;
    }
`

const AnchorButton = styled.a`
    display: block;
    height: 3rem;
    padding: 0px 2rem;
    text-align: center;
    border-radius: 3px;
    background-color: #090e1d;
    transition: opacity 200ms ease, transform 200ms ease;
    color: #fff;
    font-size: 0.875rem;
    line-height: 3rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border: 0;
    text-decoration: none;
    margin-bottom: 20px;
    &:hover {
        opacity: 0.9;
        color: #fff;
    }
    &:active {
        transform: scale(0.97);
        color: #fff;
    }
    @media (max-width: 479px) {
        margin-top: 1rem;
    }
`

export { Anchor, AnchorButton }