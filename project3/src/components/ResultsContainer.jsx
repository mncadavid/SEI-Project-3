import React, {useEffect, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import PlaceCardContainer from './PlaceCardContainer';


 function ResultsContainer(props){
    const [filteredResults, setFilteredResults] = useState({
        restaurantResults: [],
        parkResults: [],
        museumResults: [],
        filtered: false
    })

    const filterResults = (results) => {
        if(filteredResults.filtered === false){
            let restaurantResults = results.filter(place => place.types.includes("restaurant"));
            let parkResults = results.filter(place => place.types.includes("park"));
            let museumResults = results.filter(place => place.types.includes("museum"));
            setFilteredResults({
                restaurantResults: restaurantResults,
                parkResults: parkResults,
                museumResults: museumResults,
                filtered: true
            })
        }
    }

    useEffect(() => {filterResults(props.results);})

    return(
        <div className="results-container">
            <nav className="nav-bar">
                <Link className="nav-link" to="/results/restaurants" style={{textDecoration: 'none'}}>Restaurants</Link>
                <Link className="nav-link" to="/results/parks" style={{textDecoration: 'none'}}>Parks</Link>
                <Link className="nav-link" to="/results/museums" style={{textDecoration: 'none'}}>Museums</Link>
            </nav>
            <Route path="/results/restaurants" 
                render={routerProps => (<PlaceCardContainer handleAddToTrip={props.handleAddToTrip} results={filteredResults.restaurantResults} handleDetailsClick={props.handleDetailsClick}/>)} />
            <Route path="/results/parks" render={routerProps => (<PlaceCardContainer results={filteredResults.parkResults}/>)} />
            <Route path="/results/museums" render={routerProps => (<PlaceCardContainer results={filteredResults.museumResults}/>)} />
        </div>
    )
}

export default ResultsContainer;