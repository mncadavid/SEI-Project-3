import React, {useState} from 'react';
import ResultsContainer from './ResultsContainer';
import DetailedPlaceCard from './DetailedPlaceCard';
import TripContainer from './TripContainer';

function ResultsPage(props){
    const [details, setDetails] = useState({clicked: false, place: null});
    const handleDetailsClick = (place) => {
        setDetails({clicked: true, place: place})
        console.log(place);
    }
    const handleAddToTrip = (place) => {
        console.log(place)
    }

    return(
        <div className="results-page">
            <TripContainer />
            <ResultsContainer handleAddToTrip={handleAddToTrip} handleDetailsClick={handleDetailsClick} results={props.results}/>
            {details.clicked && <DetailedPlaceCard place={details.place}/>}
        </div>
    )
}

export default ResultsPage;