import React, { Component } from 'react';

import AppBar from './AppBar';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div >
        <AppBar />        
        <Card />
      </div>
    );
  }
}

export default App;
