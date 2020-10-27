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
    const [newPlace, setNew] = useState(null);
    const handleAddToTrip = (place) => {
        setNew(place)
    }

    console.log(props);

    return(
        <>
            <Paper>
                <Typography variant='h4'>{props.currentSearchPlace.formatted_address}</Typography>
            </Paper>
            <div className="results-page">
                <TripContainer 
                    place={newPlace} 
                    currentTripSelections={props.currentTripSelections}
                    setCurrentTripSelections={props.setCurrentTripSelections}
                />
                <ResultsContainer 
                    handleAddToTrip={handleAddToTrip} 
                    handleDetailsClick={handleDetailsClick} 
                    results={props.results}
                />
                {details.clicked && <DetailedPlaceCard place={details.place} closeDetailsCard={closeDetailsCard}/>}
            </div>
        </>
    )
}

export default ResultsPage;