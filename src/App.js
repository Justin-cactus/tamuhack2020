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

// #ffffff, #fff3f5, #ffdae0, #ffc0cb, #ffa7b6, #ff8da1, #ff748c, #ff5b77

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Infobar departure={'10:00am'} flightNumber={"DL31"}/>
            <div id={'main'}>
                <Landing/>
                <FlightInfo date={'1/25/2020'} departure={'10:00am'} boarding={'9:30am'} gate={'13B'} arrival={'3:00pm'}
                            baggage={'41'}/>
                <Checkin/>
                <Gate/>
                <Takeoff/>
                <Thanks cityname={'Rio de Janeiro'}/>
            </div>
        </div>
    );
}

export default App;
