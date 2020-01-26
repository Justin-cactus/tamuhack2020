import React, {Component} from "react";
import './gate.css'

export default class Gate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            going: true
        }
    }

    showGoing() {
        this.setState(() => {
            return {going: true};
        });
    }

    showAt() {
        this.setState(() => {
            return {going: false};
        });
    }

    render() {
        const cGoing = this.state.going ? '' : ' hidden';
        const cAt    = this.state.going ? ' hidden' : '';

        return(
            <div id={'gate-info'} className={'card'}>
                <div>
                    <button onClick={() => this.showGoing()}>Going to Gate</button>
                    <button onClick={() => this.showAt()}>At Gate</button>
                </div>
                <div className={'gate-going' + cGoing}>
                    <iframe frameBorder={"0"} style={{ width: "100vw", height: "80vh", border: "0"}}
                    src={"https://www.google.com/maps/embed/v1/place?q=iah&key=..."} allowFullScreen/>
                </div>
                <div className={'gate-at' + cAt}>
                    Things to do:
                    <ul>
                        <li>a</li>
                    </ul>
                </div>
            </div>
        );
    }
}