import React, { useState } from 'react';



export default function TextComp(props) {
    const title = props.date;

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
    
};

