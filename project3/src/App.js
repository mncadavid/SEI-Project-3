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

import classStyles from './components/Style/classStyle';

function App(props) {

  // Lots of state variables to hold all the locally required data for the app to function. 
  const [mapLoaded,setMapLoaded] = useState(false);
  const [currentTripData,setCurrentTripData] = useState([])
  const [currentUser,setCurrentUser] = useState(null);
  const [logInOpen, setLogInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [currentUserTripIndex,setCurrentUserTripIndex] = useState(null);
  const [tripName,setTripName] = useState('')

  const history=useHistory();

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

    // Firebase data
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

    // Observer set on authentication. Serves to update the local state whenever there is a login/logout change in the auth server. Very useful. Much good.
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        setCurrentUser(user);
        handleFindUserData(user);
      }
    })
  },[mapLoaded])
  // mapLoaded dependency set in order to avoid running useEffect a billion times and make you pull out your RAM and use it to start a fire. 

  // This function pings the firebase server and updates the local state with user data
  const handleFindUserData = (user) => {
    firebase.database().ref('trips/'+user.uid).once('value')
    .then(snapshot=>setCurrentUserData(snapshot.val()))
  }

  // Keeping track of trip name
  const handleUpdateTripName = (name) => {
    setTripName(name);
  }

  // Handles logout function with firebase database
  const handleLogout = () => {
    firebase.auth().signOut()
    .then(resp => {
      setCurrentUser(null);
      setCurrentTripData([]);
    })
  }

  // Handles saving data for trip with firebase database
  const handleSaveData = (index,tripName) => {
    if(currentUser !== null){
      const uid = firebase.auth().currentUser.uid;
      const cloudData = currentUserData ? currentUserData : [];
      if(cloudData[index]) {
        cloudData[index] = {
          tripId: cloudData[index].tripId,
          tripName: tripName,
          data: currentTripData
        }
      } else {
        cloudData.push({
          tripName: tripName,
          tripId: cloudData.length,
          data: currentTripData
        })
        setCurrentUserTripIndex(cloudData.length-1)
      }
      firebase.database().ref('trips/'+uid).set(cloudData)
      setCurrentUserData(cloudData);
    }
    else{
      setLogInOpen(true);
    }
  }

  // Handles log in propmt page
  const handleLogInModal = () => {
    setLogInOpen(!logInOpen);
  }

  // Handles sign up prompt page
  const handleSignUpModal = () => {
    setSignUpOpen(!signUpOpen);
  }

  // Handles save trip for logged in users
  const handleViewSavedTrip = (e,index) => {
    e.preventDefault();
    if(currentUserData){
      setCurrentTripData(currentUserData[index].data);
      setCurrentUserTripIndex(index);
      setTripName(currentUserData[index].tripName)
    }
    history.push("/results");
  }

  // Resets local data to prep state for a new trip
  const resetForNewTrip = () => {
    setCurrentTripData([]);
    setCurrentUserTripIndex(currentUserTripIndex+1);
    setTripName('');
  }

  const styles = classStyles();
  return (
    <div className={styles.mainWrapper}>
      <Header 
        currentUser={currentUser} 
        handleLogout={handleLogout}
        handleLogInModal={handleLogInModal}
        handleViewSavedTrip={handleViewSavedTrip}
        currentUserData={currentUserData}
        resetForNewTrip={resetForNewTrip}
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
                    currentUserTripIndex={currentUserTripIndex}
                    currentUserData={currentUserData}
                    tripName={tripName}
                    handleUpdateTripName={handleUpdateTripName}
                  />
                :
                  <Redirect to="/" />
                }
              </>
            }} 
          />
          {/* Only open the results page if there is data to display*/}
          {logInOpen && <Modal open={logInOpen} onClose={(e)=>{handleLogInModal()}} className={styles.loginModal}>
            <LogIn 
              setCurrentUser={setCurrentUser} 
              setCurrentTripData={setCurrentTripData}
              handleLogInModal={handleLogInModal} 
              handleSignUpModal={handleSignUpModal}
              setCurrentUserData={setCurrentUserData}
            />
            </Modal>}
          {signUpOpen &&
          <Modal open={signUpOpen} onClose={(e)=>{handleSignUpModal()}} className={styles.loginModal}>
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
