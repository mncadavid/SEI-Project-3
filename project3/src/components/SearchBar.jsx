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

    handleScriptLoad = () => {
        /*global google*/
        const autocomplete = new google.maps.places.Autocomplete(document.querySelector('#searchBox'));

        const map = new google.maps.Map(
            document.querySelector('#map'), 
            {
                center: {
                    lat: 38.478320,
                    lng: -97.866323
                }, 
                zoom: 4
            }
        );

        autocomplete.addListener('place_changed',()=>{
            const place = autocomplete.getPlace();

            const options = {
                radius: 10000, 
                location: new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()),
                type: ['restaurant']
            }

            new google.maps.places.PlacesService(map).nearbySearch(options, this.searchResults)            
        })
    }

    searchResults = (results,status) => {
        this.props.updateSearchResults(results);
    }

    render() {
        return (
            <div>
                <Script 
                    url={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`}
                    onLoad={this.handleScriptLoad}
                />
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
