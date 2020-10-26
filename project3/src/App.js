import React,{Component} from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom';
import Header from './components/Header';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults:{}
    }
  }

  

  componentDidMount = () => {
    const existingScript = document.querySelector('#googleMaps');
    console.log(!existingScript)

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

        autocomplete.addListener('place_changed',()=>this.findNearby(map,autocomplete,['restaurant','park','museum']))
      }
    }
  }

  findNearby = (mapObj,autocompleteObj,typeArray) => {
    const place = autocompleteObj.getPlace();

    typeArray.forEach(type => {
      const options = {
          radius: 10000, 
          location: new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()),
          type: [type]
      }

      new google.maps.places.PlacesService(mapObj).nearbySearch(options, (results,status) => this.updateSearchResults(results,status,type))
      })
    
  }

  updateSearchResults = (results,status,type) => {
    const currentState = this.state.searchResults;
    currentState[type] = results;

    this.setState({
      searchResults: currentState
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' render={()=><SearchBar updateSearchResults={this.updateSearchResults} />} />
        <Route path='/results' render={()=><ResultsPage results={this.state.searchResults} />} />
         <Footer />
      </div>
    );
  }
}


export default App;
