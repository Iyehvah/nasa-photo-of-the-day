import React from 'react';

export default function CardInfo(response){
    return(
        <div>
            <h1>{response.data.copyright}</h1>
            <h2>{response.data.date}</h2>
            <p>{response.data.explanation}</p>
        </div>
    )
};