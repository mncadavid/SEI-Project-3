import React from 'react';

function PlaceCard(props){
    return(
        <div>
            {/* <img src={props.place.photos[0].photo_reference} alt={props.place.name}></img> */}
            <h3>{props.place.rating}</h3>
            <h4>{props.place.name}</h4>
            <h5>{props.place.price_level}</h5>
            <p>{props.place.description}</p>
        </div>
    )
}

export default PlaceCard;