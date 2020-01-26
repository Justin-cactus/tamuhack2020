import React, {Component} from "react";

const infostyle = {
    position: "fixed",
    background: "gray",
    zIndex: "1",
    textAlign: "left",
    padding: "7px",
    height: "5vh",
    width: "100%",
    float: "left"
};

export default class Infobar extends Component {

    render() {
        return(
          <div style={infostyle}>
              <span style={{fontSize: '150%', verticalAlign: "top", marginLeft: '15%'}}>Depart {this.props.departure}</span>
              <span style={{float: 'right'}}>{this.props.flightNumber}</span>
          </div>
        );
    }
}