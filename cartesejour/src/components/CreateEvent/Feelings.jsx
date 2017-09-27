import React, { Component } from "react";
import Feeling from "./Feeling";
import styleFeelings from "./Styles/styleFeelings.css";
import { COLOR, FEELING, ID } from "../../config.json";

class Feelings extends Component {

	changeFeeling = (id, newFeelingColor) => {
		this.props.changeFeeling(id, newFeelingColor);
		// console.log("typeFeeling(couleur) : "+newFeelingColor);
	};

	changeFeelingValue = (id, newFeelingValue) => {
		//console.log(id, newFeelingValue)
		this.props.changeFeelingValue(id, newFeelingValue);
		//console.log("importance(taille) : "+newFeelingValue);
	};
	
	changeActiveFeeling = (newActiveFeeling) => {
		this.props.changeActiveFeeling(newActiveFeeling);
		//console.log("activeComponent(id) : "+newActiveFeeling);
	};

	changeAngle = (id, newAngle) => {
		this.props.changeAngle(id, newAngle);
	};

	resetFeeling = (id, newFeelingColor, newFeelingValue) => {
		this.props.resetFeeling(id, newFeelingColor, newFeelingValue);
	};


	render() {
	    return (
			<div className="Feelings">
				<div className="feelings_labels">
					<p>sentiments ressentis lors de l'événement et leur intensité</p>
				</div>
				<Feeling
					id={ID.id1}
					boundMin={FEELING.boundMin1}
					boundMax={FEELING.boundMax1}
					colorMin={COLOR.colorMin1}
					colorMax={COLOR.colorMax1}
					changeActiveFeeling={this.changeActiveFeeling}
					changeFeeling={this.changeFeeling}
					changeFeelingValue={this.changeFeelingValue} 
					resetFeeling={this.resetFeeling}
					changeAngle={this.changeAngle}
				/>
				<Feeling
					id={ID.id2}
					boundMin={FEELING.boundMin2}
					boundMax={FEELING.boundMax2}
					colorMin={COLOR.colorMin2}
					colorMax={COLOR.colorMax2}
					changeActiveFeeling={this.changeActiveFeeling}
					changeFeeling={this.changeFeeling}
					changeFeelingValue={this.changeFeelingValue} 
					resetFeeling={this.resetFeeling}
					changeAngle={this.changeAngle}
				/>
				<Feeling
					id={ID.id3}
					boundMin={FEELING.boundMin3}
					boundMax={FEELING.boundMax3}
					colorMin={COLOR.colorMin3}
					colorMax={COLOR.colorMax3}
					changeActiveFeeling={this.changeActiveFeeling}
					changeFeeling={this.changeFeeling}
					changeFeelingValue={this.changeFeelingValue}  
					resetFeeling={this.resetFeeling}
					changeAngle={this.changeAngle}
				/>
				<Feeling 
					id={ID.id4}
					boundMin={FEELING.boundMin4}
					boundMax={FEELING.boundMax4}
					colorMin={COLOR.colorMin4}
					colorMax={COLOR.colorMax4}
					changeActiveFeeling={this.changeActiveFeeling}
					changeFeeling={this.changeFeeling}
					changeFeelingValue={this.changeFeelingValue} 
					resetFeeling={this.resetFeeling}
					changeAngle={this.changeAngle}
				/>
				<Feeling 
					id={ID.id5}
					boundMin={FEELING.boundMin5}
					boundMax={FEELING.boundMax5}
					colorMin={COLOR.colorMin5}
					colorMax={COLOR.colorMax5}
					changeActiveFeeling={this.changeActiveFeeling}
					changeFeeling={this.changeFeeling}
					changeFeelingValue={this.changeFeelingValue} 
					resetFeeling={this.resetFeeling}
					changeAngle={this.changeAngle}
				/>
			</div>
		)
	};
}

export default Feelings;