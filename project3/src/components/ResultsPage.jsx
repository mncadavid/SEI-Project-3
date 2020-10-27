import React, {useState} from 'react';
import ResultsContainer from './ResultsContainer';
import DetailedPlaceCard from './DetailedPlaceCard';
import TripContainer from './TripContainer';
import Modal from '@material-ui/core/Modal';
import classStyles from './Style/classStyle'

function ResultsPage(props){
    const [details, setDetails] = useState({clicked: false, place: null});
    const handleDetailsClick = (place) => {
        setDetails({clicked: true, place: place})
    }
    const closeDetailsCard = (e) => {
        e.preventDefault();
        setDetails({clicked: false, place: null});
    }

    const styles = classStyles();

    return(
        <div className={styles.resultsPage}>
            <TripContainer 
                currentTripSelections={props.currentTripSelections}
                setCurrentTripSelections={props.setCurrentTripSelections}
                handleDetailsClick={handleDetailsClick}
            />
            <ResultsContainer 
                setCurrentTripSelections={props.setCurrentTripSelections}
                currentTripSelections={props.currentTripSelections}
                handleDetailsClick={handleDetailsClick} 
                results={props.results}
                currentSearchPlace={props.currentSearchPlace}
            />
            {details.clicked && 
                <Modal open={details.clicked} 
                    onClose={(e)=>closeDetailsCard(e)}>
                        <DetailedPlaceCard open={details.clicked} place={details.place} closeDetailsCard={closeDetailsCard}/></Modal>}
        </div>
    )
}

export default ResultsPage;