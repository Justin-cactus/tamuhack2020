import React, {Component} from "react";
import logo from '../logo.svg'

export default class Thanks extends Component {
    //     //#ff8da1

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{paddingTop: '5vh', height: '95vh', background: '#ff5b77'}}>
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