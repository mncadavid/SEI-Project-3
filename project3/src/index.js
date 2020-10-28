import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {purple, green} from '@material-ui/core/colors/purple';
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <ThemeProvider theme={theme}> */}
        <App />
      {/* </ThemeProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);