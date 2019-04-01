import React, { Component } from 'react';
import './App.css';
import { GameComponent } from './components/GameComponent';

class App extends Component {
  render() {
    return (
      <div>
        <GameComponent title = 'The GitHub Cards App' />
      </div>
    );
  }
}

export default App;
