import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Button = css`
    display: inline-block;
    height: 3rem;
    padding: 0px 2rem;
    background-color: #090e1d;
    border-radius: 3px;
    transition: opacity 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;
    font-size: 0.875rem;
    color: #fff;
    text-align: center;
    line-height: 3rem;
    letter-spacing: 0.05em;
    border: 0;
`
const ButtonLarge = css`
    height: 3.75rem;
    font-size: 1rem;
    line-height: 3.75rem;    
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    @media (max-width: 479px) {
        height: 3rem;
        line-height: 3rem;
    }
`

const ButtonWhite = css`
    ${Button};
    background-color: #fff;
    color: #090e1d;
`

const ButtonSmall = css`
    height: 1.875rem;
    padding-right: 1rem;
    padding-left: 1rem;
    line-height: 1.875rem;
    font-weight: 600;
    letter-spacing: 0em;
    text-transform: capitalize;
`

const ButtonRound = css`
    border-radius: 800px;
`

const AnnouncementButton = styled.button`
    ${Button};    
    ${ButtonWhite};
    ${ButtonRound};
    ${ButtonSmall};
`

const LargeButton = styled.button`
    ${Button};
    ${ButtonLarge}
`

export { AnnouncementButton, LargeButton };