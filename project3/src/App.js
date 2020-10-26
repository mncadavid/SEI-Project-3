import React,{useState,useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

// import Container from '@material-ui/core/Container';
import classStyles from './components/Style/classStyle';

function App(props) {
  const [searchResults,setSearchResults] = useState({})
  const [mapLoaded,setMapLoaded] = useState(false)

  useEffect(() => {
    const existingScript = document.querySelector('#googleMaps');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src=`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
      script.id = 'googleMaps';
      document.body.appendChild(script);

      script.onload = () => {
        new window.google.maps.Map(
          document.querySelector('#map'), 
          {
              center: {
                  lat: 38.478320,
                  lng: -97.866323
              }, 
              zoom: 4
          }
        );
        setMapLoaded(true);
      }
    }
    
  })

  const styles = classStyles();

  return (
    <div className={styles.mainWrapper}>
      <Header />
      {mapLoaded ?
        <div className={styles.homePageWrapper}>
          <Route 
            exact path='/' 
            render={()=>
              <SearchBar 
                setSearchResults={setSearchResults}
              />
            } 
          />
          <Route path='/results' render={()=><ResultsPage results={searchResults} />} />
        </div>
      : 'Map API loading...' }
        <Footer />
        <div id='map' style={{display: 'none'}}></div>
    </div>
  );
}


export default App;
