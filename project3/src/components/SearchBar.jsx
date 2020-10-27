import React, { useEffect, useState } from 'react';
import classStyles from './Style/classStyle'
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function SearchBar(props) {
    const styles = classStyles();

    const map = document.querySelector('#map');

    const [queriedSearchResults,setQueriedSearchResults] = useState({});
    const [place,setPlace] = useState({});

    const history = useHistory();


    useEffect(()=>{
        const autocomplete = new window.google.maps.places.Autocomplete(document.querySelector('#searchBox'));
        
        autocomplete.addListener('place_changed',()=>findNearby(map,autocomplete,['restaurant','park','museum']));
    })

    const findNearby = (mapObj,autocompleteObj,typeArray) => {
        setQueriedSearchResults({})
        const place = autocompleteObj.getPlace();
        setPlace(place);
    
        if (place.geometry !== undefined){
            console.log(place.geometry);
        typeArray.forEach(type => {
          const options = {
              radius: 10000, 
              location: new window.google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()),
              type: [type]
          }
    
          new window.google.maps.places.PlacesService(mapObj).nearbySearch(options, (results,status) => updateSearchResults(results,status,type))
        })}
        
    }

    const updateSearchResults = (results,status,type) => {
        const currentState = queriedSearchResults;
        currentState[type] = results;
    
        setQueriedSearchResults(currentState);
    }

    const handleClick = (e) => {
        e.preventDefault();
        props.setSearchResults(queriedSearchResults);
        props.setCurrentTripSelections([...props.currentTripSelections,{placeName: place.vicinity, selections: []}])
        props.setCurrentSearchPlace(place);
        history.push('/results/restaurants');
    }

    return (
        <>
            <h2 className={styles.searchTitle}>Where do you wanna go?</h2>
            <div className={styles.searchBarWrapper}>
                <TextField
                className={styles.searchBox}
                label="Search"
                variant="outlined"
                type='text' 
                id='searchBox'
                name='searchCriteria'
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    disabled={Object.keys(queriedSearchResults).length === 0}
                    onClick={(e)=>handleClick(e)}
                >Search</Button>
            </div>
        </>
    )
}

export default SearchBar;
