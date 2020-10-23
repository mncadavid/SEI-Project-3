import React,{Component} from 'react';
import './App.css';
import ResultsPage from './components/ResultsPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <ResultsPage />
      </div>
    );
  }
}

export default App;
