import React, { Component } from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import PrimaryAppBar from './components/AppBar/PrimaryAppBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main';

const theme = createMuiTheme({
  backgroundColor: 'black',
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
  }
});

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <PrimaryAppBar />
          <Main />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
