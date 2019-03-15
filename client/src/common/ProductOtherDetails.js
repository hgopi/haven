import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Ul = styled.ul`
    padding-left: 0;
    list-style: none;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(9, 14, 29, .1);
`;

const Li = styled.li`
    display: flex;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    justify-content: space-between;
`;

const h3 = css`
    margin-bottom: 0rem;
    margin-top: 0px;
    color: #090e1d;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
`;

const ProductOtherDetails = (props) => (
    <Ul>
        {props.details.map((detail, index) => {
            return (<Li key={index}><h3 css={h3}>{detail.key}</h3><div>{detail.value}</div></Li>)
        })}
    </Ul>
)

export default ProductOtherDetails;