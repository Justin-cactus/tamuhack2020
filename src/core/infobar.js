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
              <span style={{fontSize: '200%', verticalAlign: "top"}}>{this.props.departure}</span>
              <span style={{padding: "3px", verticalAlign: "middle"}}>{this.props.boarding} (Boarding)</span>
              <span style={{float: 'right'}}>Flight Number</span>
          </div>
        );
    }
}