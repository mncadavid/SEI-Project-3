import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import PlaceCardContainer from './PlaceCardContainer';


 function ResultsContainer(){
    return(
        <div>
            <nav>
                <Link to="/restaurants">Restaurants</Link>
                <Link to="/parks">Parks</Link>
                <Link to="/museums">Museums</Link>
            </nav>
            <Route path="/restaurants" 
                render={routerProps => (<PlaceCardContainer results={restaurantResults}/>)} />
            <Route path="/parks" render={routerProps => (<PlaceCardContainer results={parkResults}/>)} />
            <Route path="/museums" render={routerProps => (<PlaceCardContainer results={museumResults}/>)} />
        </div>
    )
}

export default ResultsContainer;