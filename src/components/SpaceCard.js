import React from 'react';
import styled from 'styled-components';


const ImgStyles = styled.img`
    border-radius: 50%;
    border: 4px solid purple;
    `;


const SpaceCard = props => {
    return (
        <div>
            <ImgStyles src ={props.data.url} alt=" "/>
        </div>
    )
};

export default SpaceCard;