import React, {useState} from 'react';
import ResultsContainer from './ResultsContainer';
import DetailedPlaceCard from './DetailedPlaceCard';
import TripContainer from './TripContainer';
import { Typography,Paper } from '@material-ui/core';

function ResultsPage(props){
    const [details, setDetails] = useState({clicked: false, place: null});
    const handleDetailsClick = (place) => {
        setDetails({clicked: true, place: place})
    }
    const closeDetailsCard = (e) => {
        e.preventDefault();
        setDetails({clicked: false, place: null});
    }

    return(
        <>
            <Paper>
                <Typography variant='h4'>{props.currentSearchPlace.formatted_address}</Typography>
            </Paper>
            <div className="results-page">
                <TripContainer 
                    currentTripSelections={props.currentTripSelections}
                    setCurrentTripSelections={props.setCurrentTripSelections}
                />
                <ResultsContainer 
                    setCurrentTripSelections={props.setCurrentTripSelections}
                    currentTripSelections={props.currentTripSelections}
                    handleDetailsClick={handleDetailsClick} 
                    results={props.results}
                    currentSearchPlace={props.currentSearchPlace}
                />
                {details.clicked && <DetailedPlaceCard place={details.place} closeDetailsCard={closeDetailsCard}/>}
            </div>
        </>
    )
}

export default ResultsPage;