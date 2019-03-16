import styled from '@emotion/styled';

export const Input = styled.input`
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

export const TextArea = styled.textarea`
    margin-bottom: 1.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid #e8e9ea;
    border-radius: 3px;
    background-color: #fff;
    transition: border-color 200ms ease;
    font-size: 1rem;
    display: block;
    width: 100%;
    color: #333333;
    vertical-align: middle;
    overflow: auto;
    height: 8rem;
    line-height: 1.5rem;
`

export const Row = styled.div`
    display: flex;
    margin-right: -0.75rem;
    margin-left: -0.75rem;    
    @media (max-width: 479px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
`