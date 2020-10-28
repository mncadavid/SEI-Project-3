import React from 'react';
import PlaceCard from './PlaceCard';
import Box from '@material-ui/core/Box';
import classStyles from './Style/classStyle';

function PlaceCardContainer(props){

    const styles = classStyles();

    return(
        <Box className={styles.placeCardContainer}>
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