import React from 'react';
import {Link, Route} from 'react-router-dom';
import PlaceCardContainer from './PlaceCardContainer';


 function ResultsContainer(props){

    return(
        <div className="results-container">
            <nav className="nav-bar">
                <Link className="nav-link" to="/restaurants" style={{textDecoration: 'none'}}>Restaurants</Link>
                <Link className="nav-link" to="/parks" style={{textDecoration: 'none'}}>Parks</Link>
                <Link className="nav-link" to="/museums" style={{textDecoration: 'none'}}>Museums</Link>
            </nav>
            <Route path="/restaurants" 
                render={routerProps => (<PlaceCardContainer results={props.results} handleDetailsClick={props.handleDetailsClick} handleAddToTrip={props.handleAddToTrip}/>)} />
            <Route path="/parks" render={routerProps => (<PlaceCardContainer results={parkResults}/>)} />
            <Route path="/museums" render={routerProps => (<PlaceCardContainer results={museumResults}/>)} />
        </div>
    )
}

export default ResultsContainer;