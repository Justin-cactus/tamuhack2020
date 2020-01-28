import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./core/sidebar";
import Infobar from "./core/infobar";
import Landing from "./1_landing_page/landing";
import FlightInfo from "./2_flight_info/flight_info";
import Checkin from "./4_check_in/check_in"
import Gate from "./5_gate/gate";
import Takeoff from "./6_in_flight/takeoff";
import Thanks from "./8_finish_page/thanks";
import ReactFullpage from "@fullpage/react-fullpage";

// #ffffff, #fff3f5, #ffdae0, #ffc0cb, #ffa7b6, #ff8da1, #ff748c, #ff5b77

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className={'section'}>
            <FlightInfo date={'1/25/2020'} departure={'10:00am'} boarding={'9:30am'} gate={'13B'} arrival={'3:00pm'}
                        baggage={'41'}/>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <Checkin/>
          </div>
          <div className="section">
            <Gate/>
          </div>
          <div className={'section'}>
            <Takeoff/>
          </div>
          <div className={'section'}>
            <Thanks cityname={'Rio de Janeiro'}/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Infobar departure={'10:00am'} flightNumber={"DL31"}/>
            <div id={'main'}>
                <Fullpage />
                <Landing/>
            </div>
        </div>
    );
}

export default App;
