import React, {Component} from "react";
import './landing.css'
import logo from '../logo.svg'

export default class Landing extends Component {

    render() {
        return(
            <div id={'landing-page'} className={'card'}>
                <img src={logo} className={'App-logo'} />
                <div>
                    Flight Number
                    <br />
                    <input /><button>Search</button>
                </div>
                <p>
                    TERMS OF SERVICE
                    <br />
                    WE NEED YOUR FLIGHT NUMBER AND LOCATION FOR ALL FEATURES TO WORK
                    <br />
                    DO NOT SUE US FOR MISSING YOUR FLIGHT
                    <br />
                    IT'S YOUR FAULT
                </p>
            </div>
        );
    }
}