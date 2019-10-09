import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CosmosStructure from './CosmosStructure.js';
import { tsPropertySignature } from '@babel/types';

const CosmosInfo = () => {
    const [picture, setPicture] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=JwcanU4s2iCXXkqt3sxgIzNVX1FpNLrlsdEAc92h`)
        .then(response => {
            console.log(response.data);
            setPicture(response.data)
        })
        .catch(error => {
            console.log('what did you do now?', error);
        })
    }, {})

    return (
        // <div>Hello</div>
        <div className = 'cosmos'>
            <img src = 'response.data.url' alt = 'starburst'/>
            
        
        </div>
    )
}

//my api key: JwcanU4s2iCXXkqt3sxgIzNVX1FpNLrlsdEAc92h 

export default CosmosInfo;