import React, {Component} from "react";
import './flight_info.css'

export default class FlightInfo extends Component {

    render() {
        return(
            <div id={'flight-info'}>
                <div>{this.props.date}</div>
                <div>Depart: {this.props.departure}</div>
                <div>Board: {this.props.boarding}</div>
                <div>Gate {this.props.gate}</div>
                <div>Arrival: {this.props.arrival}</div>
                <div>Baggage: {this.props.baggage}</div>
            </div>
        );
    }
}