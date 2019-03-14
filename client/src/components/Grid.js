import styled from '@emotion/styled';

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.75rem;
    margin-left: -0.75rem;
`;

export const GridItem = styled.div`
    width: 33.33333333%;
    margin-bottom: 3rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
`
export const TwoColGrid = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-row-gap: 16px;
    grid-column-gap: 23px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`;

export const GridItem1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    max-width: 36rem;
`
export const GridItem2 = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
`