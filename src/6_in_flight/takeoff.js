import React, {Component} from "react";
import logo from '../logo.svg'

export default class Takeoff extends Component {
    //#ff8da1
    render() {
        return(
            <div style={{paddingTop: '5vh', height: '95vh', background: '#ff8da1'}}>
                <img src={logo} className={'App-logo'} />
                <div>
                    <p>
                        ENJOY YOUR
                        <br />
                        FLIGHT
                    </p>
                </div>
            </div>
        );
    }

}