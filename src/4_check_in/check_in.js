import React, {Component} from "react";
import "./check_in.css"

export default class Checkin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{height: "95vh", background: '#ffc0cb'}}>
                <h1>
                    Check-In and Security Checklist
                </h1>
                <ul style={{textAlign: "left", listStyleType: "square"}}>
                    <input type={"checkbox"}/>ID<br/>
                    <ul>
                        <li>
                            Driver's License
                        </li>
                        <li>
                            Passport
                        </li>
                        <li>
                            Federally Issued License
                        </li>
                    </ul>
                    <input type={"checkbox"}/>Boarding Pass<br/>
                        <p style={{marginLeft: "40px"}}>
                            Boarding passes are obtainable either by accessing a digital copy via your airline's app, using a self checkout qiosk in the terminal or talking to a check-in operator.
                        </p>
                </ul>
            </div>
        );
    }
}