import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const cssBreadcrumb = css`
    list-style: none;
    padding-left: 0;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    position: relative;
    & li:not(.first-child) {
        margin-left: 24px;
    }
    & a {
        transition: opacity 200ms ease;
        color: #090e1d;
        font-weight: 600;
        text-decoration: none;
        &:after {
            content: '';
            position: absolute;
            background-image: url(/images/icon-caret.svg);
            width: 24px;
            height: 24px;
            opacity: 0.25;
        }        
    }
    & li:last-child {
        a {            
            opacity: 0.5;
            pointer-events: none;
        }
        a:after {
            display: none;
        }
    }
`;

const BreadCrumb = (props) => (
    <ol css={cssBreadcrumb}>
        <li><a href="/">Home</a></li>
        {props.path && props.path.map((link, index, array) => (
            index !== array.length - 1 ? <li key={index}><Link to={`/${(link || '').toLowerCase()}`}>{link}</Link></li> :
                <li key={index}>{link}</li>
        ))}
    </ol >
);

export default BreadCrumb;