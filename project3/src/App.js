import React,{Component} from 'react';
import './App.css';
import TripContainer from './components/TripContainer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <TripContainer />
      </div>
    );
  }
}

export default App;
