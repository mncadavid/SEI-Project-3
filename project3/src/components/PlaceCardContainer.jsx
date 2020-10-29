import React from 'react';
import PlaceCard from './PlaceCard';
import Box from '@material-ui/core/Box';
import classStyles from './Style/classStyle';

// PlaceCardContainer is displayed within the ResultsContainer
function PlaceCardContainer(props){

    const styles = classStyles();

    return(
        <Box className={styles.placeCardContainer}>

            {/* Passing props down from our results container to the individual Place Card. */}
            {props.results.map(place => {
                return <PlaceCard 
                        key={place.place_id} 
                        place={place} 
                        disabled={props.isDisabled(place)}
                        handleDetailsClick={props.handleDetailsClick} 
                        handleAddToTrip={()=>props.handleAddToTrip(place)}
                    />
            })}

        </Box>
    )
}

export default PlaceCardContainer;