import React from 'react';
import logo from './logo.svg';
import './App.css';
import Infobar from "./core/infobar";
import Sidebar from "./core/sidebar";
import Landing from "./1_landing_page/landing";
import Checkin from "./4_check_in/check_in"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Infobar departure={'10:00am'} flightNumber={"DL31"}/>
      <Checkin />
      <Landing />
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
