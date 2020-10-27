import React, { useState } from 'react';
import PlaceCard from './PlaceCard';
import Box from '@material-ui/core/Box';

function PlaceCardContainer(props){

    const [currentLocationData,] = useState(props.currentTripSelections.find(location => location.placeName === props.currentSearchPlace.vicinity))

    const [currentLocationIndex,] = useState(props.currentTripSelections.indexOf(currentLocationData))

    const handleAddToTrip = (place) => {
        currentLocationData.selections.push(place);

        const allLocationData = props.currentTripSelections;
        allLocationData[currentLocationIndex] = currentLocationData;
        props.setCurrentTripSelections([...allLocationData])
    }

    return(
        <Box className="place-card-container">
            {props.results.map(place => {
                return <div>
                    <PlaceCard 
                        key={place.name} 
                        place={place} 
                        disabled={currentLocationData.selections.includes(place)}
                        handleDetailsClick={props.handleDetailsClick} 
                        handleAddToTrip={()=>handleAddToTrip(place)}
                    />
                </div>
            })}
        </Box>
    )
}

export default PlaceCardContainer;