import React, { Component } from 'react';
import Script from 'react-load-script';
import {Link} from 'react-router-dom';

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
                <form>
                    <input 
                        type='text' 
                        id='searchBox'
                        name='searchCriteria' 
                        placeholder='Search' 
                        value={this.state.searchCriteria}
                    />
                </form>
                <Link to='/results/restaurants'>Search</Link>
                <div id='map'>

                </div>
            </div>
        )
    }
}

export default SearchBar;
