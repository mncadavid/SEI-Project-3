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
        <Header />
        <Route exact path='/' render={()=><SearchBar updateSearchResults={this.updateSearchResults} />} />
        <Route path='/results' render={()=><ResultsPage results={this.state.searchResults} />} />
         <Footer />
      </div>
    );
  }
}


export default App;
