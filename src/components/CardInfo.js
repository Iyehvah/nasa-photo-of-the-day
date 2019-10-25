import React from 'react';
import styled from 'styled-components';

const TextDiv = styled.div`
    width: 50%;
    margin: 0 auto;
`;

const CardInfo = props => {
    return(
        <TextDiv>
            <h1>{props.data.copyright}</h1>
            <h2>{props.data.date}</h2>
            <p>{props.data.explanation}</p>
        </TextDiv>
    )
};

export default CardInfo;