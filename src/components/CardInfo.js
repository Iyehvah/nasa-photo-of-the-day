import React from 'react';

const CardInfo = props => {
    return(
        <div>
            <h1>{props.data.copyright}</h1>
            <h2>{props.data.date}</h2>
            <p>{props.data.explanation}</p>
        </div>
    )
};

export default CardInfo;