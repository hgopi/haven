import { Fragment } from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Img } from './../../components';
import { NewsLetter } from './../../common';
import { TextCenter, h1, textLarge, containerNarror, h2, Img1, Img2, Img3, BgOffset, Blockquote, OffsetImg } from './../../components/Pages';

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