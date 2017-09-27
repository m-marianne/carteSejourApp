import React, { Component } from "react";
import styleJauge from './Styles/styleJauge.css';

class MomentPie extends Component {

    handleChangeEnfant = (event) => {
        this.props.changeMoment(event);
    };

    render() {

        return (
        	<svg 
				className="MomentPie" 
				version="1.1" xmlns="http://www.w3.org/2000/svg" 
				x="10" y="10" width="100%" height="100%" viewBox="-65 -30 416 350" 
				preserveAspectRatio="xMinYMin meet" 
			>
				<path 
					className="TimeEvent_moment_part" 
					id='moment1'
					d="M139.5,139.5L18.4,208.9l0,0C6.7,188.4,0,164.8,0,139.5C0,62.5,62.5,0,139.5,0V139.5z"
					onClick={() => this.handleChangeEnfant(this.props.valeur[0])} 
				/>
				<text className="momentPie_txt" id="moment1_txt_matin" x="51%" y="35%">matin</text>
				<path 
					className="TimeEvent_moment_part" 
					id='moment2'
					d="M18.4,208.9c24.1,42,69.3,70.2,121.1,70.2c51.8,0,97.1-28.3,121.1-70.2l0,0l-121.1-69.3L18.4,208.9z"
					onClick={() => this.handleChangeEnfant(this.props.valeur[1])} 
				/>
				<text className="momentPie_txt" id="moment2_txt_aprMidi" x="32.5%" y="65%">après-midi</text>
				<path 
					className="TimeEvent_moment_part" 
					id='moment3'
					d="M139.5,0c77.1,0,139.5,62.5,139.5,139.5c0,25.2-6.7,48.9-18.4,69.3l0,0l-121.1-69.3V0z"
					onClick={() => this.handleChangeEnfant(this.props.valeur[2])} 
				/>
				<text className="momentPie_txt" id="moment3_txt_nuit" x="15%" y="35%">nuit</text>
			</svg>
		)
    }
}

export default MomentPie;