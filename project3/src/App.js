import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ResultsPage />
        <Footer />
      </div>
    );
  }
}

export default App;
