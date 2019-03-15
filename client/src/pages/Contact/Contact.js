import { Fragment } from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { NewsLetter } from './../../common';
import { Row, Column, Input, TextArea, AnchorButton } from './../../components';
import { Link } from 'react-router-dom';

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
    padding-bottom: 6rem;
`

const textSmall = css`
    margin-right: 0.5rem;
    font-size: 0.875rem;
`;

const ContactDetails = styled.div`
    display: flex;
    max-width: 50rem;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-around;
    text-align: center;
    padding-bottom: 6rem;
`;

const DetailColumn = styled.div``

const h4 = css`
    margin-top: 0px;
    margin-bottom: 1.5rem;
    color: #090e1d;
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
`

const textPrimary = css`
    font-size: 1.25rem;
`
const textSecondary = css`
    opacity: 0.55;
    font-size: 0.875rem;
`

const Contact = (props) => (
    <Fragment>
        <div className="horizontal-rule inner"></div>
        <section className="section-about">
            <div className="container">
                <TextCenter>
                    <h1 css={h1}>Contact</h1>
                    <p css={textLarge}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </TextCenter>
            </div>
            <div className="container" css={containerNarror}>
                <form>
                    <Row>
                        <Column>
                            <Input type="text" placeholder="Enter your name" />
                        </Column>
                        <Column>
                            <Input type="email" placeholder="Email address" />
                        </Column>
                    </Row>
                    <TextArea placeholder="Enter your message" />
                    <Row>
                        <Column>
                            <div css={textSmall}>We'll never share your details. See our <Link to="/privacy-policy">privacy policy</Link></div>
                        </Column>
                        <Column>
                            <AnchorButton href="/">Send Message</AnchorButton>
                        </Column>
                    </Row>
                </form>
            </div>
            <ContactDetails>
                <DetailColumn>
                    <h4 css={h4}>Call</h4>
                    <div css={textPrimary}>+91 83722 46622</div>
                    <div css={textSecondary}>Mon - Fri, 9am - 5pm</div>
                </DetailColumn>
                <DetailColumn>
                    <h4 css={h4}>Main</h4>
                    <div css={textPrimary}>11 High Road</div>
                    <div css={textPrimary}>Chennai, TN</div>
                </DetailColumn>
                <DetailColumn>
                    <h4 css={h4}>Email</h4>
                    <a css={textLarge} href="mailto:contact@haven.in">contact@haven.in</a>
                </DetailColumn>
            </ContactDetails>
            <div className="horizontal-rule inner"></div>
            <NewsLetter />
        </section>
    </Fragment>
)

export default Contact;