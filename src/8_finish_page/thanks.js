import React, {Component} from "react";
import './thanks.css'
import logo from '../logo.svg'

export default class Thanks extends Component {

    render() {
        return(
            <div id={'thanks'} className={'card'}>
                <img src={logo} className={'App-logo'} />
                <div>
                    <p>
                        ENJOY YOUR TRIP TO
                        <br />
                        {this.props.cityname}
                    </p>
                </div>
            </div>
        );
    }

}