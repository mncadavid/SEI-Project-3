import React from 'react';
import PlaceCard from './PlaceCard';
import Box from '@material-ui/core/Box';
function PlaceCardContainer(props){
    return(
        <Box className="place-card-container">
            {props.results.map(place => {
                return <PlaceCard 
                            key={place.place_id}
                            place={place} 
                            handleDetailsClick={props.handleDetailsClick} 
                            handleAddToTrip={props.handleAddToTrip}
                            currentTripSelections={props.currentTripSelections}
                        />
                        
            })}
        </Box>
    )
}

export default PlaceCardContainer;