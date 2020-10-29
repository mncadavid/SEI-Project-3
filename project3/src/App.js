import React,{useState,useEffect} from 'react';
import './App.css';
import {Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';

// import Container from '@material-ui/core/Container';
import classStyles from './components/Style/classStyle';

function App(props) {
  // const [currentSearchResults,setCurrentSearchResults] = useState({});
  const [mapLoaded,setMapLoaded] = useState(false);
  // const [currentTripSelections,setCurrentTripSelections] = useState([]);
  // const [currentSearchPlaces,setCurrentSearchPlaces] = useState({});
  const [currentTripData,setCurrentTripData] = useState([])
  const [currentUser,setCurrentUser] = useState(null);

  useEffect(() => {
    const existingScript = document.querySelector('#googleMaps');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src=`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
      script.id = 'googleMaps';
      document.body.appendChild(script);

      script.onload = () => {
        if(!mapLoaded) {
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
    }

    var firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: "sei-project-3-293415.firebaseapp.com",
      databaseURL: "https://sei-project-3-293415.firebaseio.com",
      projectId: "sei-project-3-293415",
      storageBucket: "sei-project-3-293415.appspot.com",
      messagingSenderId: "519447256644",
      appId: "1:519447256644:web:ec07eda7b35ea5b67ce611",
      measurementId: "G-CP90FNSPE0"
    };
    // Initialize Firebase
    
    /*global firebase*/
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  })

  const handleLogout = () => {
    firebase.auth().signOut()
    .then(resp => {
      setCurrentUser(null);
      setCurrentTripData([]);
    })
  }

  const handleSaveData = () => {
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref('trips/'+uid).set(currentTripData)
  }

  const styles = classStyles();

  return (
    <div className={styles.mainWrapper}>
      <Header 
        currentUser={currentUser} 
        handleLogout={handleLogout}
      />
      {mapLoaded ?
        <div className={styles.homePageWrapper}>
          <Route 
            exact path='/' 
            render={()=>
              <SearchBar 
                currentTripData={currentTripData}
                setCurrentTripData={setCurrentTripData}
              />
            } 
          />
          <Route 
            exact path='/results' 
            render={()=> {
              return <>
                {currentTripData.length !== 0 ?
                  <ResultsPage 
                    currentTripData={currentTripData}
                    setCurrentTripData={setCurrentTripData}
                    handleSaveData={handleSaveData}
                  />
                :
                  <Redirect to="/" />
                }
              </>
            }} 
          />
          <Route
            exact path='/login'
            render={()=>
              <LogIn 
                setCurrentUser={setCurrentUser} 
                setCurrentTripData={setCurrentTripData}
              />}
          />
          <Route
            exact path='/signup'
            render={()=><SignUp setCurrentUser={setCurrentUser}/>}
          />
        </div>
      : 'Map API loading...' }
        <Footer />
        <div id='map' style={{display: 'none'}}></div>
    </div>
  );
}


export default App;
