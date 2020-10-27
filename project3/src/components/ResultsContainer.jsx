import React, { useState } from 'react';
import {Link, Route} from 'react-router-dom';
import PlaceCardContainer from './PlaceCardContainer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';


 function ResultsContainer(props){
    const [currentTab, setCurrentTab] = useState(0);
    return(
        <Paper elevation={3} >
            <nav className="nav-bar">
                <Tabs value={currentTab}>
                <Link className="nav-link" to="/results/restaurants" style={{textDecoration: 'none'}}><Tab label="Restaurants" onClick={() => setCurrentTab(0)}/></Link>
                <Link className="nav-link" to="/results/parks" style={{textDecoration: 'none'}}><Tab label="Parks" onClick={() => setCurrentTab(1)}/></Link>
                <Link className="nav-link" to="/results/museums" style={{textDecoration: 'none'}}><Tab label="Museums" onClick={() => setCurrentTab(2)}/></Link>
                </Tabs>
            </nav>
            <Route path="/results/restaurants" 
                render={routerProps => 
                    (<PlaceCardContainer 
                        key="restaurants"
                        handleAddToTrip={props.handleAddToTrip} 
                        results={props.results.restaurant} 
                        handleDetailsClick={props.handleDetailsClick}
                        currentTripSelections={props.currentTripSelections}
                    />)
                } 
            />
            <Route 
                path="/results/parks" 
                render={routerProps => 
                    (<PlaceCardContainer
                        key="parks" 
                        handleAddToTrip={props.handleAddToTrip} 
                        results={props.results.park}
                        handleDetailsClick={props.handleDetailsClick}
                        currentTripSelections={props.currentTripSelections}
                    />)} 
            />
            <Route 
                path="/results/museums" 
                render={routerProps => 
                    (<PlaceCardContainer 
                        key="museums"
                        handleAddToTrip={props.handleAddToTrip} 
                        results={props.results.museum}
                        handleDetailsClick={props.handleDetailsClick}
                        currentTripSelections={props.currentTripSelections}
                    />)} 
            />
        </Paper>
    )
}

export default ResultsContainer;