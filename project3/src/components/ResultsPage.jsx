import React, {useState} from 'react';
import ResultsContainer from './ResultsContainer';
import DetailedPlaceCard from './DetailedPlaceCard';
import TripContainer from './TripContainer';
import Modal from '@material-ui/core/Modal';
import classStyles from './Style/classStyle'

function ResultsPage(props){
    const [details, setDetails] = useState({clicked: false, place: null});
    const [currentLocationData,] = useState(props.currentTripSelections.find(location => location.placeAddress === props.currentSearchPlace.formatted_address))
    const [currentLocationIndex,] = useState(props.currentTripSelections.indexOf(currentLocationData))
    
    const handleDetailsClick = (place) => {
        setDetails({clicked: true, place: place})
    }

    const closeDetailsCard = (e) => {
        e.preventDefault();
        setDetails({clicked: false, place: null});
    }

    const handleAddToTrip = (place) => {
        currentLocationData.selections.push(place);

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

    return(
        <div className={styles.resultsPage}>
            <TripContainer 
                currentTripSelections={props.currentTripSelections}
                setCurrentTripSelections={props.setCurrentTripSelections}
                handleDetailsClick={handleDetailsClick}
                handleRemoveFromTrip={handleRemoveFromTrip}
            />
            <ResultsContainer 
                handleDetailsClick={handleDetailsClick} 
                results={props.results}
                handleAddToTrip={handleAddToTrip}
                isDisabled={isDisabled}
                displayPlaceName={props.currentSearchPlace.formatted_address}
            />
            {details.clicked && 
                <Modal open={details.clicked} 
                    onClose={(e)=>closeDetailsCard(e)}>
                        <DetailedPlaceCard open={details.clicked} place={details.place} closeDetailsCard={closeDetailsCard}/></Modal>}
        </div>
    )
}

export default ResultsPage;