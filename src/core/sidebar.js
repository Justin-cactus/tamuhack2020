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
                    <div>Flight Info</div>
                    <div>Origin Airport</div>
                    <div>Check-In / Security</div>
                    <div>Gate</div>
                    <div>Destination Airport</div>
                    <div>Start New</div>
                </aside>
                <span className={'navbutton' + cName}>
                    <img src={open} width={'10%'} onClick={() => this.navOpen()}/>
                    <img src={close} width={'10%'} onClick={() => this.navCollapse()}/>
                </span>
            </div>
        );
    }
}