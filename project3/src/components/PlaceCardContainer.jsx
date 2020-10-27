import React from 'react';
import PlaceCard from './PlaceCard';
import Box from '@material-ui/core/Box';
function PlaceCardContainer(props){

    const handleAddToTrip = (place) => {
        const locationToAddTo = props.currentTripSelections.find(location => location.placeName === props.currentSearchPlace.vicinity)
        const index = props.currentTripSelections.indexOf(locationToAddTo);

        locationToAddTo.selections.push(place);

        const allLocationData = props.currentTripSelections;
        allLocationData[index] = locationToAddTo;
        props.setCurrentTripSelections([...allLocationData])
    }

    return(
        <Box className="place-card-container">
            {props.results.map(place => {
                return <div>
                    <PlaceCard 
                        key={place.name} 
                        place={place} 
                        handleDetailsClick={props.handleDetailsClick} 
                        handleAddToTrip={()=>handleAddToTrip(place)}
                    />
                </div>
            })}
        </Box>
    )
}

export default PlaceCardContainer;