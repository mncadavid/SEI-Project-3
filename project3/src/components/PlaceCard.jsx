import React from 'react';

function PlaceCard(props){
    return(
        <div>
            <img src={props.place.image} alt={props.place.name}></img>
            <h4>{props.place.name}</h4>
            <h5>{props.place.rating}</h5>
            <p>{props.place.description}</p>
        </div>
    )
}

export default PlaceCard;