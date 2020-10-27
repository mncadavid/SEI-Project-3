import React from 'react';
import SelectedPlaceCards from './SelectedPlaceCards';
import Paper from '@material-ui/core/Paper';

function TripContainer(props) {

    const handleRemove = (id) => {
        alert("Remove button connected")
    }

    if(props.place != null && !props.currentTripSelections.includes(props.place)) {
        let selectedPlaces = props.currentTripSelections
        selectedPlaces.push(props.place)
        props.setCurrentTripSelections(selectedPlaces)
    }

    return(
        <Paper elevation={3} className="trip-container">
                <h3>Planned Trip</h3>
                <div>
                    {props.currentTripSelections.map((selection, id) => {
                        return (
                            <SelectedPlaceCards 
                                selection={selection} 
                                key={id} 
                                handleRemove={handleRemove}
                            />
                        )
                    })}
                </div>
        </Paper>
    )
}

export default TripContainer;