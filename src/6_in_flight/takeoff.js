import React, {Component} from "react";
import './takeoff.css'
import logo from '../logo.svg'

export default class Takeoff extends Component {
    //#ff8da1
    render() {
        return(
            <div id={'takeoff'} className={'card'}>
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