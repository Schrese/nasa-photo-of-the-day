import React from 'react';

const CosmosStructure = props => {
    return(
    <div className = 'img-container' key = {props.url}>
        <img>{props.url}</img>
        <p>{props.date}</p>
    </div>
  )
}

export default CosmosStructure