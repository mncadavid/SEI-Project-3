import React, {useEffect, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import PlaceCardContainer from './PlaceCardContainer';
import Tabs from '@material-ui/core/Tabs';
// import ToolBar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';


 function ResultsContainer(props){
    const [filteredResults, setFilteredResults] = useState({
        restaurantResults: props.results.restaurant,
        parkResults: props.results.park,
        museumResults: props.results.museum,
        filtered: true
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

    // useEffect(() => {filterResults(props.results);})

    return(
        <Paper elevation={3} >
            <nav className="nav-bar">
                <Tabs>
                <Link className="nav-link" to="/results/restaurants" style={{textDecoration: 'none'}}><Tab label="Restaurants"/></Link>
                <Link className="nav-link" to="/results/parks" style={{textDecoration: 'none'}}><Tab label="Parks"/></Link>
                <Link className="nav-link" to="/results/museums" style={{textDecoration: 'none'}}><Tab label="Museums"/></Link>
                </Tabs>
            </nav>
            <Route path="/results/restaurants" 
                render={routerProps => (<PlaceCardContainer handleAddToTrip={props.handleAddToTrip} results={filteredResults.restaurantResults} handleDetailsClick={props.handleDetailsClick}/>)} />
            <Route path="/results/parks" render={routerProps => (<PlaceCardContainer handleAddToTrip={props.handleAddToTrip} results={filteredResults.parkResults}/>)} />
            <Route path="/results/museums" render={routerProps => (<PlaceCardContainer handleAddToTrip={props.handleAddToTrip} results={filteredResults.museumResults}/>)} />
        </Paper>
    )
}

export default ResultsContainer;