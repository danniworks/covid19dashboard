import React, { Component } from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import PrimaryAppBar from './components/AppBar/PrimaryAppBar';
import SideBar from './components/AppBar/SideBar';
import Main from './components/Main';

const theme = createMuiTheme({
  backgroundColor: 'black',
  typography: {
    fontFamily: [
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
      endpoint : 'wss://6ka50xq2x9.execute-api.us-east-1.amazonaws.com/dev',
      socket: null
    }
  }

  async componentDidMount() {
    const { endpoint } = this.state;
    
    const ws = new WebSocket(endpoint);
    ws.onopen = () => { 
      this.setState({socket : ws});
      // ws.send({"action" : "updates"});
      // console.log(ws); 
      // ws.onmessage = evt => {
      //   console.log(evt.data);
      // }
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <PrimaryAppBar />
          <SideBar />
          <Main socket={this.state.socket} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
