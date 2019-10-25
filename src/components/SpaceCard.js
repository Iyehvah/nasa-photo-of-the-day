import React, {useEffect, useState } from 'react';
import axios from 'axios';



export default function SpaceCard(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=EzeObyP91MSsBjv4GWZpWbx9qxjYDoozapCA0n8D')
        .then(response => {
                console.log(response.data)
                setData(response.data)
                const props = response.data;
         });
    }, []);



    return (
        <div className = "mainContainer">
            <h2> {data.date}</h2>
            <img src ={data.url} alt=" "/>
            <p>{data.explanation}</p>
        </div>
    )
};