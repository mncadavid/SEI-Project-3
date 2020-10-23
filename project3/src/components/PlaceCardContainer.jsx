import React from 'react';
import PlaceCard from './PlaceCard';

function PlaceCardContainer(props){
    return(
        <div>
            {props.results.map(place => {
                return <div>
                    <PlaceCard place={place} />
                    </div>
            })}
        </div>
    )
}

export default PlaceCardContainer;