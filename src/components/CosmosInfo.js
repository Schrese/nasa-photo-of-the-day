import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import {Jumbotron} from 'reactstrap';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const Description = styled.h4`
    color: blue;
    text-align: center;
    width: 80vw;
    height: 20vh;
    padding-left: 10%
`
const Wrapper = styled.div`
    height: 100vh;
    background: lightblue;
    margin: 0 auto;
`
const ImageContainer = styled.img`
    height: 60vh;
    
`

const CosmosInfo = () => {
    const [picture, setPicture] = useState({});
    // const [startDate, setStartDate] = useState(new Date());
    //     console.log(startDate);
    const [newDate, setNewDate] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=JwcanU4s2iCXXkqt3sxgIzNVX1FpNLrlsdEAc92h`)
        .then(response => {
            // console.log(response.data);
            setPicture(response.data)
            
        })
        .catch(error => {
            console.log('what did you do now?', error);
        })
    }, [])

    return (
        // <div>Hello</div>
        <Jumbotron>
            
            <Wrapper>
            
                <h1>The Image of the Day is: {picture.title}</h1>
                <ImageContainer className = 'image' src = {picture.url} alt = 'photo of the day'/>
                <h2>{picture.date}</h2>
                {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat = 'yyyy-MM-dd' /> */}
                
                <form>
                    <input type='date' 
                    onChange={newDate => setNewDate()} 
                    />
                </form>
                <Description>{picture.explanation}</Description>
                {/* <CosmosStructure key={picture.url}/> */}
                </Wrapper>
        </Jumbotron>
    )
}
//my api key: JwcanU4s2iCXXkqt3sxgIzNVX1FpNLrlsdEAc92h 

export default CosmosInfo;