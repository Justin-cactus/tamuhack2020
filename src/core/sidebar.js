import React, {Component} from "react";
import './sidebar.css'
import open from './hamburger-menu.svg';
import close from './close.svg';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }

    navCollapse() {
        this.setState(() => {
            return {collapsed: true};
        });
    }

    navOpen() {
        this.setState(() => {
           return {collapsed: false};
        });
    }

    render() {
        const cName = this.state.collapsed ? ' collapsed' : '';

        return(
            <div className={'nav' + cName}>
                <aside>
                    <a href={"#flight-info"}>Flight Info</a>
                    <a href={"#origin-airport"}>Origin Airport</a>
                    <a href={"#check-in"}>Check-In / Security</a>
                    <a href={"#gate-info"}>Gate Info</a>
                    <a href={"#destination-airport"}>Destination Airport</a>
                    <button style={{bottom: "0"}}>Start New</button>
                </aside>
                <span className={'navbutton' + cName}>
                    <img src={open} width={'10%'} onClick={() => this.navOpen()}/>
                    <img src={close} width={'10%'} onClick={() => this.navCollapse()}/>
                </span>
            </div>
        );
    }
}