import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const TextCenter = styled.div`
    text-align: center;
    padding-bottom: 4rem;
    @media (max-width: 479px) {
        padding-bottom: 2rem;
    }
`
export const h1 = css`
    font-size: 4.5rem;
    line-height: 4.5rem;
    margin-bottom: 1.5rem;
    @media (max-width: 479px) {
        font-size: 1.75rem;
        line-height: 2.25rem;
        margin-bottom: 1rem;
    }
`;

export const textLarge = css`
    font-size: 1.25rem;
    @media (max-width: 479px) {
        font-size: 1rem;
    }
`;

export const containerNarror = css`
    max-width: 588px;
    padding-top: 6rem;
    padding-bottom: 6rem;
    @media (max-width: 479px) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

export const BgOffset = styled.div`
    position: relative;
    overflow: visible;
    background-color: #f8f8f8;
    text-align: center;
    padding-top: 6rem;
    padding-bottom: 6rem;
    @media (max-width: 479px) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`;

export const OffsetImg = styled.img`
    position: absolute;
    width: 191px;
    height: 191px;
    border: 12px solid #fff;
    @media (max-width: 479px) {
        display: none;
    }
`

export const Img1 = css`
    left: 5%;
    top: -30%;
`;
export const Img2 = css`
    left: -2%;
`;
export const Img3 = css`
    top: -7%;
    right: 3%;
`;

export const h2 = css`
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 1rem;
`
export const Blockquote = styled.blockquote`
    display: block;
    max-width: 49rem;
    margin-top: 3rem;
    margin-right: auto;
    margin-left: auto;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #2c666e;
    text-align: center;
    @media (max-width: 479px) {
        font-size: 1.5rem;
        line-height: 2rem;
    }
`

export const textSmall = css`
    margin-right: 0.5rem;
    font-size: 0.875rem;
`;

