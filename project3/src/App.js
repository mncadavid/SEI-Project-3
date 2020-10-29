import React,{useState,useEffect} from 'react';
import './App.css';
import {Route, Redirect, useHistory} from 'react-router-dom';
import Header from './components/Header';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';
import Modal from '@material-ui/core/Modal';


// import Container from '@material-ui/core/Container';
import classStyles from './components/Style/classStyle';

function App(props) {
  const [mapLoaded,setMapLoaded] = useState(false);
  const [currentTripData,setCurrentTripData] = useState([])
  const [currentUser,setCurrentUser] = useState(null);
  const [logInOpen, setLogInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

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
    if(currentUser !== null){
      const uid = firebase.auth().currentUser.uid;
      firebase.database().ref('trips/'+uid).set(currentTripData)
    }
    else{
      setLogInOpen(true);
    }
  }

  const handleLogInModal = () => {
    setLogInOpen(!logInOpen);
  }
  const handleSignUpModal = () => {
    setSignUpOpen(!signUpOpen);
  }

  const styles = classStyles();
  console.log(Object.keys(searchResults).length);
  console.log(currentSearchPlace);
  return (
    <div className={styles.mainWrapper}>
      <Header 
        currentUser={currentUser} 
        handleLogout={handleLogout}
        handleLogInModal={handleLogInModal}
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
            path='/results' 
            render={()=> {
              return <>
                {currentTripData.length !== 0 ?
                  <ResultsPage 
                    currentTripData={currentTripData}
                    setCurrentTripData={setCurrentTripData}
                    currentUser={currentUser}
                    handleSaveData={handleSaveData}
                  />
                :
                  <Redirect to="/" />
                }
              </>
            }} 
          />
          {logInOpen && <Modal open={logInOpen} onClose={(e)=>{handleLogInModal()}}>
            <LogIn 
              setCurrentUser={setCurrentUser} 
              setCurrentTripData={setCurrentTripData}
              handleLogInModal={handleLogInModal} 
              handleSignUpModal={handleSignUpModal}
            />
            </Modal>}
          {signUpOpen &&
          <Modal open={signUpOpen} onClose={(e)=>{handleSignUpModal()}}>
            <SignUp open={signUpOpen} 
              setCurrentUser={setCurrentUser} 
              handleLogInModal={handleLogInModal}
              handleSignUpModal={handleSignUpModal}
            />
          </Modal>
          }
        </div>
      : 'Map API loading...' }
        <Footer />
        <div id='map' style={{display: 'none'}}></div>
    </div>
  );
}


export default App;
