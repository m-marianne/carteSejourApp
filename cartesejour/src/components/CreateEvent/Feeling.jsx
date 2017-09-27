import React, { Component } from "react";
import Jauge from "./Jauge";
import FeelingRange from "./FeelingRange";

class Feeling extends Component {

	constructor(props) {
		super(props);

	 	this.state = {
        	valeur: [1, 2, 3, 4, 5],
        	reset: null
    	}
	};

	changeFeeling = (id, newFeelingColor) => {
		//console.log(id, newFeelingColor)
		this.props.changeFeeling(id, newFeelingColor);
	};

	changeActiveFeeling = (newActiveFeeling) => {
		this.props.changeActiveFeeling(newActiveFeeling);
	};

	changeAngle = (id, newAngle) => {
		this.props.changeAngle(this.props.id, newAngle);
	};

	changeFeelingValue = (newFeelingValue) => {
		//console.log(id, newFeelingValue)
		this.props.changeFeelingValue(this.props.id, newFeelingValue);
	};

	resetFeeling = (target) => {
		this.props.resetFeeling(this.props.id, null, null);
	};

	render() {
	    return (
			<div className="feeling_option">
				<FeelingRange 
					id={this.props.id}
					boundMin={this.props.boundMin}
					boundMax={this.props.boundMax}
					colorMin={this.props.colorMin}
					colorMax={this.props.colorMax}
					resetFeeling={this.resetFeeling}
					changeFeeling={this.changeFeeling}
					changeActiveFeeling={this.changeActiveFeeling}
					changeAngleRandom={this.changeAngle}
				/>
				<Jauge 
					id={this.props.id}
					className="feelings_jauge"
					valeur={this.state.valeur} 
					changeImportance={this.changeFeelingValue} 
				/>
				<input type='button' id={this.props.id} className="feeling_buttons" value="réinitialiser" onClick={this.resetFeeling}/>
			</div>

		)
	};
}

export default Feeling;


//this.props.changeAngleRandom(this.props.id, this.getAngle())