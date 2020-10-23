import React from 'react';
import PlaceCard from './PlaceCard';

function PlaceCardContainer(props){
    return(
        <div className="place-card-container">
            {props.results.map(place => {
                return <div>
                    <PlaceCard place={place} handleDetailsClick={props.handleDetailsClick}/>
                    </div>
            })}
        </div>
    )
}

export default PlaceCardContainer;