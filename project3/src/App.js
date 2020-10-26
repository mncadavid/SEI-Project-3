import React,{useState,useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

import Container from '@material-ui/core/Container';
import classStyles from './components/Style/classStyle';

function App(props) {
  
  const [searchResults,setSearchResults] = useState({})
  const [searchValidity,setSearchValidity] = useState(false)

  useEffect(() => {
    const existingScript = document.querySelector('#googleMaps');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src=`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
      script.id = 'googleMaps';
      document.body.appendChild(script);

      script.onload = () => {
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

        document.querySelector('#map').style.display = 'none';

        autocomplete.addListener('place_changed',()=>findNearby(map,autocomplete,['restaurant','park','museum']))
      }
    }
  })

  const findNearby = (mapObj,autocompleteObj,typeArray) => {
    const place = autocompleteObj.getPlace();

    typeArray.forEach(type => {
      const options = {
          radius: 10000, 
          location: new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()),
          type: [type]
      }

      new google.maps.places.PlacesService(mapObj).nearbySearch(options, (results,status) => updateSearchResults(results,status,type))
    })
    
  }

  const updateSearchResults = (results,status,type) => {
    const currentState = searchResults;
    currentState[type] = results;

    setSearchResults(currentState);
    setSearchValidity(true);
  }

  const styles = classStyles();

  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.homePageWrapper}>
        <Route exact path='/' render={()=><SearchBar validInput={searchValidity}/>} />
        <Route path='/results' render={()=><ResultsPage results={searchResults} />} />
      </div>
        <Footer />
        <div id='map' style={{display: 'none'}}></div>
    </div>
  );
}


export default App;
