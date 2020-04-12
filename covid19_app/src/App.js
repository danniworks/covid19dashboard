import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import PrimaryAppBar from './components/AppBar/PrimaryAppBar';
import SideBar from './components/AppBar/SideBar';
import Main from './components/Main';
import Footer from './components/Footer/Footer';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      response : false,
      endpoint : 'wss://6ka50xq2x9.execute-api.us-east-1.amazonaws.com/dev'
    }
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    console.log(socket);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <PrimaryAppBar />
          <SideBar />
          <Main />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
