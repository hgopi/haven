import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Ul = styled.ul`
    padding-left: 0;
    list-style: none;
    margin-top: 0px;
    margin-bottom: 10px;
`;

const Li = styled.li`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(9, 14, 29, .1)
`;

const h3 = css`
    margin-bottom: 0rem;
    margin-top: 0px;
    color: #090e1d;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
`;

const p = css`
    margin-bottom: 0;
`;

const ProductDetailsList = (props) => (
    <Ul>
        {props.details.map((detail, index) => {
            return (<Li key={index}><h3 css={h3}>{detail.key}</h3><p css={p}>{detail.value}</p></Li>)
        })}
    </Ul>
)

export default ProductDetailsList;