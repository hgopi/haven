import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const LoginPage = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    background-color: #090e1d;
    position: relative;
    background-size: cover;
`;

export const BgImage = styled.div`
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
    opacity: 0.7;
    background-image: url(/images/login-bg.jpg);
`

export const FormContainer = styled.div`
    width: 100%;
    max-width: 420px;
    height: auto;
    margin: auto;
    background: #27272f;
    color: #fff;
    min-height: 270px;
    padding: 1rem;
    z-index: 1;
`;

export const LoginInput = styled.input`
    width: 100%;
    padding: 12px 6px;
    outline: 0;
    border: 0;
    background: #3a3a46;
    font-size: 0.875rem;
    color: #fff;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    font-family: Overpass, sans-serif;
    letter-spacing: 0.05rem;
    &:focus {
        border: 0;
    }
`;

export const LoginButton = styled.button`
    outline: 0;
    border: 0;
    border-radius: 3px;
    color: #fff;
    background-color: #ff5757;
    padding: 12px;
    text-align: center;
    width: 100%;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: Overpass, sans-serif;
    margin-top: 1rem;
`;

export const H1 = styled.h1`
    font-size: 1.75rem;
`;

export const PageTItle = styled.h1`
    font-size: 1.5rem;
    color: #929292;
    margin-bottom: 0;
    margin-top: 0;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex: 0 0 25%;
    width: 100%;
    margin-right: -15px;
    margin-left: -15px;
`;