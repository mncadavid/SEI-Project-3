import React, { useState } from 'react';
import ResultsContainer from './ResultsContainer';
import DetailedPlaceCard from './DetailedPlaceCard';
import TripContainer from './TripContainer';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import classStyles from './Style/classStyle';
import { Backdrop } from '@material-ui/core';

// This ResultsPage is the page of all 'truth'
// A lot of functions and data get passed from this jsx file
function ResultsPage(props){
    const [details, setDetails] = useState({clicked: false, place: null});
    const [currentLocationIndex,setCurrentLocationIndex] = useState(props.currentTripData.length-1)

    // Opens more details on the clicked destination
    const handleDetailsClick = (place) => {
        setDetails({clicked: true, place: place})
    }

    // Closes the more details on the clicked destination
    const closeDetailsCard = (e) => {
        e.preventDefault();
        setDetails({clicked: false, place: null});
    }

    // Adds clicked destination to the planned trip container
    const handleAddToTrip = (place) => {
        props.currentTripData[currentLocationIndex].selections.push({
            name: place.name,
            place_id: place.place_id,
            icon: place.icon
        });

        const allLocationData = props.currentTripData;
        allLocationData[currentLocationIndex] = props.currentTripData[currentLocationIndex];
        props.setCurrentTripData([...allLocationData])
    }

    // Removes selected destination from planned trip container
    const handleRemoveFromTrip = (place) => {
        props.currentTripData.forEach((trip,i) => {
            if(trip.selections.some(selection => selection.place_id === place.place_id)) {
                const index = trip.selections.indexOf(place);
                const modifiedSelections = props.currentTripData;
                modifiedSelections[i].selections.splice(index,1);
                props.setCurrentTripData([...modifiedSelections]);
                return;
            }
        })
    }

    // Limits you from selected an already selected place
    const isDisabled = (place) => {
        return props.currentTripData[currentLocationIndex].selections.some(location => location.place_id === place.place_id);
    }

    const styles = classStyles();
   
    
    return(
        // Passing all of the data/functions thru to TripContainer/ResultsContainer

        <div className={styles.resultsPage}>
            <TripContainer 
                currentTripData={props.currentTripData}
                handleDetailsClick={handleDetailsClick}
                handleRemoveFromTrip={handleRemoveFromTrip}
                currentUser={props.currentUser}
                handleSaveData={props.handleSaveData}
                currentLocationIndex={currentLocationIndex}
                setCurrentLocationIndex={setCurrentLocationIndex}
                currentUserTripIndex={props.currentUserTripIndex}
                tripName={props.tripName}
                handleUpdateTripName={props.handleUpdateTripName}
            />
            <ResultsContainer 
                handleDetailsClick={handleDetailsClick} 
                results={props.currentTripData[currentLocationIndex].results}
                handleAddToTrip={handleAddToTrip}
                isDisabled={isDisabled}
                displayPlaceName={props.currentTripData[currentLocationIndex].placeName}
            />
            {details.clicked && 
                <Modal open={details.clicked}
                    onClose={(e)=>closeDetailsCard(e)} closeAfterTransition
                    BackdropComponent={Backdrop} BackdropProps={{timeout: 2000}}>
                        <Fade in={details.clicked}>
                        <DetailedPlaceCard open={details.clicked} place={details.place} closeDetailsCard={closeDetailsCard}/></Fade></Modal>}
        </div>
    )
}

export default ResultsPage;