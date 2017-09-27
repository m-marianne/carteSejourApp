import React, { Component } from "react";
import styleFeelings from "./Styles/styleFeelings.css";

class FeelingRange extends Component {
	
	componentToHex = (c) => {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	rgbToHex = (r, g, b) => {
    	return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
	}

	findColorCorrespondance = (colorA, colorB, nbInterval, rangePosition) => {
	//1- je spécifie les rvb
	var colorA_R = colorA[0];
	var colorA_G = colorA[1];
	var colorA_B = colorA[2];
	var colorB_R = colorB[0];
	var colorB_G = colorB[1];
	var colorB_B = colorB[2];

	//2- trouver la valeur de l'interval (on divise par le nombre d'interval voulu), pour chaque couleur
	var valeurInterval_R = (colorB_R-colorA_R)/nbInterval;
	var valeurInterval_G = (colorB_G-colorA_G)/nbInterval;
	var valeurInterval_B = (colorB_B-colorA_B)/nbInterval;

	//3- trouver la couleur correspondant à la position du range :
	var redCorrespondance = Math.round(colorA_R+(valeurInterval_R*rangePosition)); 
	var greenCorrespondance = Math.round(colorA_G+(valeurInterval_G*rangePosition));
	var blueCorrespondance = Math.round(colorA_B+(valeurInterval_B*rangePosition));

	// //4- retourner sous la forme de couleur (R, G, B) : 
	// var colorCorrespondante = "RGB("+redCorrespondance+", "+greenCorrespondance+", "+blueCorrespondance+")";
	//convertir les rgb en hex
	var colorCorrespondante = this.rgbToHex(redCorrespondance, greenCorrespondance, blueCorrespondance);

	return colorCorrespondante
	};

	getAngle() {
        return Math.round(Math.random()*(360-1)+1);
	};

    changeFeeling = (event) => {
    	var range = event.target
    	//console.log(this.props)
    	this.props.changeFeeling(this.props.id, this.findColorCorrespondance(this.props.colorMin, this.props.colorMax, range.getAttribute("max"), range.value));
		//console.log(this.findColorCorrespondance(this.props.colorMin, this.props.colorMax, range.getAttribute("max"), range.value))
		this.props.changeActiveFeeling(range.getAttribute("id"));
		this.props.changeAngleRandom(this.props.id, this.getAngle())
		//console.log(this.getAngle())
	};

    render() {
        return (
			<div className="range_group">	
				<input 
					type="range" 
					id={this.props.id} 
					className="feelings_range" 
					min="0" 
					max="100" 
					step="1"
					data-colorMin={this.props.colorMin}
					data-colorMax={this.props.colorMax}
					onMouseUp={this.changeFeeling}
					onTouchEnd={this.changeFeeling}

					
				/>
				<div className="range_label_valuesContainer">
					<p>{this.props.boundMin}</p><p>{this.props.boundMax}</p>
				</div>
			</div>
		)
	}
}
export default FeelingRange;