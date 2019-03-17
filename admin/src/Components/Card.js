import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const CardContainer = styled.div`
    position: relative;
    display: flex;
    border-radius: .25rem;
    word-wrap: break-word;
    background-color: #fff;    
    align-items: center;
    justify-content: center;
    margin: 15px;
    padding: 15px 0;
    width: 25%;
`;

const IconContainer = styled.div`
    color: #fff;
    font-size: 3rem;
    padding: 15px;    
    vertical-align: middle;
    display: flex;
    align-items: center;
    flex-grow: 0;
    background: ${props => props.dark || '#2f80e7'};
    height: 100%;
    border-bottom-left-radius: .25rem;
    border-top-left-radius: .25rem;
`;

const TextContainer = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    color: #fff;    
    vertical-align: middle;
    background-color: ${props => props.color || '#5d9cec'};
    flex-grow: 1;
    justify-content: center;
    height: 100%;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
`;

const CardH2 = styled.h2`
    font-size: 1.875rem;
    line-height: 1.875rem;
    margin-bottom: 0.6525rem;
    margin-top: 0;
`;

const CardText = styled.p`
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 0.875rem;
`;

const Card = (props) => (
    <CardContainer>
        <IconContainer dark={props.dark}>{props.children}</IconContainer>
        <TextContainer color={props.color}>
            <CardH2>{props.count}</CardH2>
            <CardText>{props.heading}</CardText>
        </TextContainer>
    </CardContainer>
);

export default Card;