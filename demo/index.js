import React from 'react';
import ReactDOM from 'react-dom';
import SnakeGame from '../src/SnakeGame.jsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <h1>react-simple-snake</h1>
    <div className="textWrapper">
      <p id="instructions">Use the arrow keys or W/A/S/D to play</p>
      <p className="subTitle">A simple snake game created with the
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React </a>
      framework, available
      <a href="https://www.npmjs.com/package/react-simple-snake" target="_blank" rel="noopener noreferrer"> here</a></p>
    </div>
    <SnakeGame />
  </React.StrictMode>,
  document.getElementById('root')
);
