import React from 'react';
import logo from './logo.svg';
import Board from './Board.js';
import './App.css';

class App extends React.Component {
  render () {
      return (
          <div>
              <h2>Minesweeper</h2>
              <Board></Board>
          </div>
      )
  }
}

export default App;
