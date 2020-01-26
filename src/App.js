import React from 'react';
import logo from './logo.svg';
import './App.css';
import Infobar from "./core/infobar";
import Sidebar from "./core/sidebar";
import Landing from "./1_landing_page/landing";
import Checkin from "./4_check_in/check_in"
import Takeoff from "./6_in_flight/takeoff"
import Thanks from "./8_finish_page/thanks"

// #ffffff, #fff3f5, #ffdae0, #ffc0cb, #ffa7b6, #ff8da1, #ff748c, #ff5b77

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Infobar departure={'10:00am'} flightNumber={"DL31"}/>
      <Landing />
      <Checkin />
      <Takeoff />
      <Thanks />
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
