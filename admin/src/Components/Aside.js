import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';

const aside = css`
    position: fixed;
    width: 170px;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 116;
    backface-visibility: hidden;
    background-color: #fff;
    min-height: 100%;
    nav {
        overflow-y: auto;
        height: 100%;
        overflow-x: hidden;
        border-right: 1px solid #ccc;
        ul {
            list-style: none;
            padding-left: 0;
            position: relative;
            li {
                display: block;
                padding: 12px 24px;
                a {
                    background-color: #fcfcfc;                    
                    color: #515253;
                    text-decoration: none;
                    font-size: 15px;
                    &.active {
                        color: #23b7e5;
                        text-decoration: none;
                    }
                }
            }
        }
    }
`;

const Aside = () => (
    <aside css={aside}>
        <nav>
            <ul>
                <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
                <li><NavLink to="/dashboard/new-product" activeClassName="active">New/Edit Product</NavLink></li>
            </ul>
        </nav>
    </aside>
)

export default Aside;