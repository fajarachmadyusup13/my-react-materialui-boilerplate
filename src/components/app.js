import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import AppBar from './AppBar';
import SideBar from './SideBar';
import Content from './Content';

import Card from './Card';

const style = {
  height: "100%"
}

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tes: 1
    }

    this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      tes: this.state.tes+1
    })
  }

  render() {
    return (
      <div className="container">
        <div className="appbar">
          <AppBar />
        </div>
        <div className="content-sidebar">
          <div className="sidebar">
            <Paper style={{height:"100%"}} zDepth={3}>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Paper>
          </div>
          <div className="content">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
