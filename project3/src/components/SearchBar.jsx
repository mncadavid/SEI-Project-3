import React, { Component } from 'react';
import Script from 'react-load-script';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            nearbySearchResults: []
        }
    }

    render() {
        return (
            <div>
                <h2>Where do you wanna go?</h2>
                <TextField
                    label="Search"
                    variant="outlined"
                    type='text' 
                    id='searchBox'
                    name='searchCriteria' 
                    value={this.state.searchCriteria}
                />
                <Link to='/results/restaurants' style={{textDecoration: 'none'}}><Button variant="contained" color="primary">Search</Button></Link>
                <div id='map'>

                </div>
            </div>
        )
    }
}

export default SearchBar;
