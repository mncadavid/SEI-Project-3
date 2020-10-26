import React, {useState} from 'react';
import ResultsContainer from './ResultsContainer';
import DetailedPlaceCard from './DetailedPlaceCard';

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
        <div className="results-page">
            <ResultsContainer handleDetailsClick={handleDetailsClick} 
                closeDetailsCard={closeDetailsCard} results={props.results}/>
            {details.clicked && <DetailedPlaceCard place={details.place} closeDetailsCard={closeDetailsCard}/>}
        </div>
    )
}

export default ResultsPage;