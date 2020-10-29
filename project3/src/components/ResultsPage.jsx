import React, {useEffect, useState} from 'react';
import ResultsContainer from './ResultsContainer';
import DetailedPlaceCard from './DetailedPlaceCard';
import TripContainer from './TripContainer';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import classStyles from './Style/classStyle';
import { Backdrop } from '@material-ui/core';

function ResultsPage(props){
    const [details, setDetails] = useState({clicked: false, place: null});
    const [currentLocationData, setCurrentLocationData] = useState(props.currentTripSelections[0]);
    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
    console.log(props.currentTripSelections);
    console.log(props.currentSearchPlace);
    let currentSearchPlace = props.currentSearchPlace;
    useEffect(() => {if(JSON.stringify(currentSearchPlace) === '{}' || currentLocationData.placeAddress !== props.currentSearchPlace.formatted_address){
        setCurrentLocationData(props.currentTripSelections.find(location => location.placeAddress === props.currentSearchPlace.formatted_address))
        setCurrentLocationIndex(props.currentTripSelections.indexOf(currentLocationData));
        console.log("Inconditional")
    }
    })
    const handleDetailsClick = (place) => {
        setDetails({clicked: true, place: place})
    }

    const closeDetailsCard = (e) => {
        e.preventDefault();
        setDetails({clicked: false, place: null});
    }

    const handleAddToTrip = (place) => {
        currentLocationData.selections.push({
            name: place.name,
            place_id: place.place_id,
            icon: place.icon
        });

        const allLocationData = props.currentTripSelections;
        allLocationData[currentLocationIndex] = currentLocationData;
        props.setCurrentTripSelections([...allLocationData])
    }

    const handleRemoveFromTrip = (place) => {
        props.currentTripSelections.forEach((trip,i) => {
            if(trip.selections.some(selection => selection.place_id === place.place_id)) {
                const index = trip.selections.indexOf(place);
                const modifiedSelections = props.currentTripSelections;
                modifiedSelections[i].selections.splice(index,1);
                props.setCurrentTripSelections([...modifiedSelections]);
                return;
            }
        })
    }

    const isDisabled = (place) => {
        return currentLocationData.selections.some(location => location.place_id === place.place_id);
    }

    const styles = classStyles();
    console.log("Here")
    return(
        <div className={styles.resultsPage}>
            <TripContainer 
                currentTripSelections={props.currentTripSelections}
                setCurrentTripSelections={props.setCurrentTripSelections}
                handleDetailsClick={handleDetailsClick}
                handleRemoveFromTrip={handleRemoveFromTrip}
                currentSearchPlace={props.currentSearchPlace}
                currentUser={props.currentUser}
                handleSaveData={props.handleSaveData}
            />
            <ResultsContainer 
                handleDetailsClick={handleDetailsClick} 
                results={props.results}
                handleAddToTrip={handleAddToTrip}
                isDisabled={isDisabled}
                displayPlaceName={props.currentSearchPlace.name}
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