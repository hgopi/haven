import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const cssBanner = css`
    display: flex;
    min-height: 30vw;
    position: relative;
    padding-top: 3rem;
    padding-bottom: 3rem;
    justify-content: center;
    align-items: center;
    background-position: 50% 50%;
    background-size: cover;
    color: #fff;
    text-align: center;
    background-color: #090e1d;
    & p {
        font-size: 1.25rem;
    }
`;

const cssBgImage = css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
    opacity: 0.7;
`;

const cssRelative = css`
    position: relative;
`

const cssH2 = css`
    font-size: 4.5rem;
    line-height: 4.5rem;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;

const Banner = (props) => (
    <div css={cssBanner}>
        <div css={cssBgImage} style={{ backgroundImage: props.bgImage }}></div>
        <div className="container" css={cssRelative}>
            <h2 css={cssH2}>{props.heading}</h2>
            <p>{props.description}</p>
        </div>
    </div>
)

export default Banner;