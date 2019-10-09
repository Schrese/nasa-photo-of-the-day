import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CosmosStructure from './CosmosStructure.js';


const CosmosInfo = () => {
    const [picture, setPicture] = useState({});
    // const [newDate, setNewDate]

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=JwcanU4s2iCXXkqt3sxgIzNVX1FpNLrlsdEAc92h`)
        .then(response => {
            console.log(response.data);
            setPicture(response.data)
        })
        .catch(error => {
            console.log('what did you do now?', error);
        })
    }, [])

    return (
        // <div>Hello</div>
        <div className = 'cosmos'>
            {/* <img src = 'response.data.url' alt = 'starburst'/> */}
            {/* <button onClick = {() => setNewDate('date' -1)}>-</button> */}
            <h1>The Image of the Day is: {picture.title}</h1>
            <img className = 'image' src = {picture.url} alt = 'photo of the day'/>
            <h2>{picture.date}</h2>
            <h4>{picture.explanation}</h4>

            {/* <CosmosStructure key={picture.url}/> */}
        
        </div>
    )
}

//my api key: JwcanU4s2iCXXkqt3sxgIzNVX1FpNLrlsdEAc92h 

export default CosmosInfo;