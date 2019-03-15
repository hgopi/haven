import { Link } from "react-router-dom";
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const TextCenter = styled.div`
    text-align: center;
`

const h1 = css`
    font-size: 4.5rem;
    line-height: 4.5rem;
    margin-bottom: 1.5rem;
`;

const Page404 = () => (
    <section>
        <TextCenter className="container">
            <h2 css={h1}>404</h2>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/">Back to Home</Link>
        </TextCenter>
    </section>
)

export default Page404;