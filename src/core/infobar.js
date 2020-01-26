import React, {Component} from "react";

const infostyle = {
    position: "fixed",
    background: "gray",
    zIndex: "1",
    textAlign: "left",
    padding: "7px",
    height: "5%",
    width: "100%",
    float: "left"
};

export default class Infobar extends Component {

    render() {
        return(
          <div style={infostyle}>
              <span style={{fontSize: '200%', verticalAlign: "top", marginLeft: '15%'}}>{this.props.departure}</span>
              <span style={{float: 'right'}}>{this.props.flightNumber}</span>
          </div>
        );
    }
}