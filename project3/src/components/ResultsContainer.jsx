import React from 'react';
import {Link, Route} from 'react-router-dom';
import PlaceCardContainer from './PlaceCardContainer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';


 function ResultsContainer(props){
    return(
        <Paper elevation={3} >
            <nav className="nav-bar">
                <Tabs>
                    <Link 
                        className="nav-link" 
                        to="/results/restaurants" 
                        style={{textDecoration: 'none'}}
                    >
                        <Tab label="Restaurants"/>  
                    </Link>
                    <Link 
                        className="nav-link" 
                        to="/results/parks" 
                        style={{textDecoration: 'none'}}
                    >
                        <Tab label="Parks"/>
                    </Link>
                    <Link 
                        className="nav-link" 
                        to="/results/museums" 
                        style={{textDecoration: 'none'}}
                    >
                        <Tab label="Museums"/>
                    </Link>
                </Tabs>
            </nav>

            <Route 
                path="/results/restaurants" 
                render={routerProps => (
                    <PlaceCardContainer 
                        setCurrentTripSelections={props.setCurrentTripSelections}
                        currentTripSelections={props.currentTripSelections} 
                        results={props.results.restaurant} 
                        handleDetailsClick={props.handleDetailsClick}
                        currentSearchPlace={props.currentSearchPlace}
                    />
                )} 
            />
            <Route 
                path="/results/parks" 
                render={routerProps => (
                    <PlaceCardContainer 
                        setCurrentTripSelections={props.setCurrentTripSelections} 
                        currentTripSelections={props.currentTripSelections}
                        results={props.results.park}
                        currentSearchPlace={props.currentSearchPlace}
                    />
                )} 
            />
            <Route 
                path="/results/museums" 
                render={routerProps => (
                    <PlaceCardContainer 
                        setCurrentTripSelections={props.setCurrentTripSelections}  
                        currentTripSelections={props.currentTripSelections}
                        results={props.results.museum}
                        currentSearchPlace={props.currentSearchPlace}
                    />
                )} 
            />
        </Paper>
    )
}

export default ResultsContainer;