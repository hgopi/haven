import { Fragment } from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Img } from './../../components';
import { NewsLetter } from './../../common';

const TextCenter = styled.div`
    text-align: center;
    padding-bottom: 4rem;
`

const h1 = css`
    font-size: 4.5rem;
    line-height: 4.5rem;
    margin-bottom: 1.5rem;
`;

const textLarge = css`
    font-size: 1.25rem;
`;

const containerNarror = css`
    max-width: 588px;
    padding-top: 6rem;
    padding-bottom: 6rem;
`

const BgOffset = styled.div`
    position: relative;
    overflow: visible;
    background-color: #f8f8f8;
    text-align: center;
    padding-top: 6rem;
    padding-bottom: 6rem;
`;

const OffsetImg = styled.img`
    position: absolute;
    width: 191px;
    height: 191px;
    border: 12px solid #fff;
`

const Img1 = css`
    left: 5%;
    top: -30%;
`;
const Img2 = css`
    left: -2%;
`;
const Img3 = css`
    top: -7%;
    right: 3%;
`;

const h2 = css`
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 1rem;
`
const Blockquote = styled.blockquote`
    display: block;
    max-width: 49rem;
    margin-top: 3rem;
    margin-right: auto;
    margin-left: auto;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #2c666e;
    text-align: center;
`

const About = (props) => (
    <Fragment>
        <div className="horizontal-rule inner"></div>
        <section className="section-about">
            <div className="container">
                <TextCenter>
                    <h1 css={h1}>Beautify your space</h1>
                    <p css={textLarge}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </TextCenter>

                <Img src="/images/about-1.jpg" />
            </div>
            <div className="container" css={containerNarror}>
                <p css={textLarge}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
            <BgOffset>
                <div className="container">
                    <h2 css={h2}>OUR PROMISE</h2>
                    <Blockquote>
                        To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage.
                    </Blockquote>
                </div>
                <OffsetImg css={Img1} src="/images/square-1.jpeg" />
                <OffsetImg css={Img2} src="/images/square-3.jpg" />
                <OffsetImg css={Img3} src="/images/square-2.jpg" />
            </BgOffset>
            <NewsLetter />
        </section>
    </Fragment>
)

export default About;