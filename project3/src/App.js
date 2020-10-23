import React,{Component} from 'react';
import './App.css';

import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
