import React from 'react';


function DetailedPlaceCard(props){
    return(
        <div className="details-card">
            <h2>{props.place.name}</h2>
        </div>
    )
}

export default DetailedPlaceCard;