import React from 'react';

const CosmosStructure = props => {
    return(
    <div className = 'container' key = {props.date}>
        <img>{props.url}</img>
        <p>{props.date}</p>
    </div>
  )
}

export default CosmosStructure