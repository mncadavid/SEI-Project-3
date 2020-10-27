import React from 'react';
import PlaceCard from './PlaceCard';
import Box from '@material-ui/core/Box';
function PlaceCardContainer(props){
    return(
        <Box className="place-card-container">
            {props.results.map(place => {
                return <div>
                            <PlaceCard 
                                key={place.name}
                                place={place} 
                                handleDetailsClick={props.handleDetailsClick} 
                                handleAddToTrip={props.handleAddToTrip}
                                currentTripSelections={props.currentTripSelections}
                            />
                        </div>
            })}
        </Box>
    )
}

export default PlaceCardContainer;