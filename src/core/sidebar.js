import React, {Component} from "react";
import {slide as Menu} from 'react-burger-menu'
import './sidebar.css'
import open from './hamburger-menu.svg';
import close from './close.svg';

export default class Sidebar extends Component {


    render() {
        return(
            <Menu
              customBurgerIcon={<img src={open} alt={''}/>}
              customCrossIcon={<img src={close} alt={''}/>} >
                <a className={'btn btn-primary'} href={"#flight-info"}>Flight Info</a>
                <a className={'btn btn-primary'} href={"#origin-airport"}>Origin Airport</a>
                <a className={'btn btn-primary'} href={"#check-in"}>Check-In / Security</a>
                <a className={'btn btn-primary'} href={"#gate-info"}>Gate Info</a>
                <a className={'btn btn-primary'} href={"#destination-airport"}>Destination Airport</a>
                <button className={'btn btn-primary'} style={{bottom: "0"}}>Start New</button>
            </Menu>
        );
    }
}