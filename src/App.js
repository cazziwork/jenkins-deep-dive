import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React学習
        </a>
        <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer">Learn Jenkins</a>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Learn Git</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Learn GitHub</a>
      </header>
    </div>
  );
}

export default App;
