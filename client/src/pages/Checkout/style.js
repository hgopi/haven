import styled from '@emotion/styled';

export const container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    max-width: 940px;
`;

export const columnLeft = styled.div`
    flex-basis: 800px;
    flex-grow: 0;
    flex-shrink: 1;
    margin-right: 1.5rem;
`

export const columnRight = styled.div`
    flex-basis: 320px;
    flex-grow: 0;
    flex-shrink: 0;
    position: sticky;
    top: 20px;
`

export const box = styled.div`
    margin-bottom: 1.5rem;
    border: 1px solid #e6e6e6;
    padding: 1.5rem;
`

export const h5 = styled.h5`
    margin-bottom: 1.5rem;
    margin-top: 0;
    color: #090e1d;
    display: inline-block;
`
export const formInfo = styled.div`
    opacity: 0.55;
    font-size: 0.875rem;
    float: right;
    display: inline-block;
`;

export const label = styled.label`
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
`

export const input = styled.input`
    height: 3rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid #e8e9ea;
    border-radius: 3px;
    background-color: #fff;
    transition: border-color 200ms ease;
    font-size: 1rem;
    line-height: 3rem;
    color: #333;
    display: block;
    width: 100%;
    outline: 0;
    &:focus {
        border-color: #d2d3d5;
    }
`

export const row = styled.div`
    display: flex;
    margin-right: -0.75rem;
    margin-left: -0.75rem;
`

export const column = styled.div`
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
`

export const totalRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
    justify-content: space-between;
`

export const total = styled.div`
    color: #090e1d;
    font-weight: 600;
`
export const message = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
    padding-top: 10px;
    padding-right: 16px;
    padding-bottom: 10px;
    padding-left: 16px;
    background-color: #ffdede;
    display: none;
`