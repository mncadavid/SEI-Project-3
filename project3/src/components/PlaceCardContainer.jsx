import React, { useState } from 'react';
import PlaceCard from './PlaceCard';
import Box from '@material-ui/core/Box';
import classStyles from './Style/classStyle';

function PlaceCardContainer(props){

    const [currentLocationData,] = useState(props.currentTripSelections.find(location => location.placeName === props.currentSearchPlace.vicinity))

    const [currentLocationIndex,] = useState(props.currentTripSelections.indexOf(currentLocationData))

    const handleAddToTrip = (place) => {
        currentLocationData.selections.push(place);

        const allLocationData = props.currentTripSelections;
        allLocationData[currentLocationIndex] = currentLocationData;
        props.setCurrentTripSelections([...allLocationData])
    }

    const styles = classStyles();

    return(
        <Box className={styles.placeCardContainer}>
            {props.results.map(place => {
                return <PlaceCard 
                        key={place.place_id} 
                        place={place} 
                        disabled={currentLocationData.selections.includes(place)}
                        handleDetailsClick={props.handleDetailsClick} 
                        handleAddToTrip={()=>handleAddToTrip(place)}
                    />
            })}
        </Box>
    )
}

export default PlaceCardContainer;