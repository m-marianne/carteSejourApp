import React, { Component } from "react";
import Jauge from "./Jauge";

class EventImportance extends Component {

	constructor(props) {
		super(props);

	 	this.state = {
        	valeur: [1, 2, 3, 4, 5]
    	}
	}

	changeImportance = (newImportanceValue) =>{
       	this.props.changeImportance(newImportanceValue);
   	};

	render() {
	    return (

			<div className="EventImportance">
				<label className="form_label"> importance de l'événement
					<Jauge 	
						className="eventImportance_jauge" 
						valeur={this.state.valeur} 
						changeImportance={this.changeImportance}
					/>
				</label>
			</div>
		)
	}
}

export default EventImportance;