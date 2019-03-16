import { Fragment } from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { NewsLetter } from './../../common';
import { h1, TextCenter } from './../../components/Pages';

const textLarge = css`
    font-size: 1.25rem;
`;

const FaqGroup = styled.div`
    display: flex;
    max-width: 60rem;
    margin-top: 2rem;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 479px) {
        flex-direction: column;
        margin-top: 0rem;
    }
`;

const FaqTitle = styled.div`
    display: flex;
    padding-right: 1.5rem;
    align-items: center;
    flex: 0 0 auto;
    @media (max-width: 479px) {
        margin-bottom: 2rem;
    }
`;

const FaqList = styled.ul`
    max-width: 36rem;
    margin-bottom: 0px;
    padding-left: 0px;
    list-style: none;
`
const FaqItem = styled.li`
    margin-bottom: 3rem;
`

const faqImg = css`
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`

const faqHeading = css`
    margin-bottom: 0rem;
    margin-left: 1.5rem;
`

const faqItemHeading = css`
    margin-top: 0px;
    margin-bottom: 1.5rem;
    color: #090e1d;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 400;
`

const Faq = (props) => (
    <Fragment>
        <div className="horizontal-rule inner"></div>
        <section className="section-about">
            <div className="container">
                <TextCenter>
                    <h1 css={h1}>FAQ</h1>
                    <p css={textLarge}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </TextCenter>
            </div>
        </section>
        <div className="horizontal-rule inner"></div>
        <section>
            <div className="container">
                <FaqGroup>
                    <FaqTitle>
                        <img css={faqImg} src="/images/icon-shipping-pallet.svg" alt="shipping icon" />
                        <h2 css={faqHeading}>Shipping</h2>
                    </FaqTitle>
                    <FaqList>
                        <FaqItem>
                            <h3 css={faqItemHeading}>What if I need to modify my order?</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </FaqItem>
                        <FaqItem>
                            <h3 css={faqItemHeading}>What if I need to change my shipping address?</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </FaqItem>
                        <FaqItem>
                            <h3 css={faqItemHeading}>Can I get same day delivery?</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </FaqItem>
                    </FaqList>
                </FaqGroup>
            </div>
        </section>
        <div className="horizontal-rule inner"></div>
        <section>
            <div className="container">
                <FaqGroup>
                    <FaqTitle>
                        <img css={faqImg} src="/images/icon-credit-card.svg" alt="payment icon" />
                        <h2 css={faqHeading}>Payment</h2>
                    </FaqTitle>
                    <FaqList>
                        <FaqItem>
                            <h3 css={faqItemHeading}>What payment methods do you accept?</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </FaqItem>
                        <FaqItem>
                            <h3 css={faqItemHeading}>When do subscriptions renew?</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </FaqItem>
                        <FaqItem>
                            <h3 css={faqItemHeading}>How do I modify my payment method?</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </FaqItem>
                    </FaqList>
                </FaqGroup>
            </div>
        </section>
        <div className="horizontal-rule inner"></div>
        <section>
            <div className="container">
                <FaqGroup>
                    <FaqTitle>
                        <img css={faqImg} src="/images/icon-dolly.svg" alt="returns icon" />
                        <h2 css={faqHeading}>Returns</h2>
                    </FaqTitle>
                    <FaqList>
                        <FaqItem>
                            <h3 css={faqItemHeading}>What is your returns policy?</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </FaqItem>
                        <FaqItem>
                            <h3 css={faqItemHeading}>How do I repackage my item for return?</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </FaqItem>
                        <FaqItem>
                            <h3 css={faqItemHeading}>How long after purchase can I return?</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </FaqItem>
                    </FaqList>
                </FaqGroup>
            </div>
        </section>
        <div className="horizontal-rule inner"></div>
        <NewsLetter />
    </Fragment>
)

export default Faq;