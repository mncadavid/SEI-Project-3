import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import PlaceCardContainer from './PlaceCardContainer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';


 function ResultsContainer(props){
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
                    render={routerProps => { <PlaceCardContainer 
                                handleAddToTrip={props.handleAddToTrip} 
                                results={props.results.restaurant} 
                                handleDetailsClick={props.handleDetailsClick}
                            />
                    }}
                />
                <Route path="/results/parks" render={routerProps => (<PlaceCardContainer handleAddToTrip={props.handleAddToTrip} results={props.results.park}/>)} />
                <Route path="/results/museums" render={routerProps => (<PlaceCardContainer handleAddToTrip={props.handleAddToTrip} results={props.results.museum}/>)} />
        </Paper>
    )
}

export default ResultsContainer;