import React,{Component} from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom';

import SearchBar from './components/SearchBar';
import ResultsPage from './components/ResultsPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    }
  }

  updateSearchResults = (data) => {
    this.setState({
      searchResults: data
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={()=><SearchBar updateSearchResults={this.updateSearchResults} />} />
        <Route exact path='/results' render={()=><ResultsPage results={this.state.searchResults} />} />
      </div>
    );
  }
}

export default App;
