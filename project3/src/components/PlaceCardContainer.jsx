import React from 'react';
import PlaceCard from './PlaceCard';
import Box from '@material-ui/core/Box';
function PlaceCardContainer(props){
    console.log(props);
    return(
        <Box className="place-card-container">
            {props.results.map(place => {
                return <div>
                    <PlaceCard place={place} handleDetailsClick={props.handleDetailsClick} handleAddToTrip={props.handleAddToTrip}/>
                    </div>
            })}
        </Box>
    )
}

export default PlaceCardContainer;