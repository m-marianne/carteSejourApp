import React, { Component } from "react";
import styleComplements from "./Styles/styleComplements.css";

class EventOther extends Component {

	handleChangeDescription = (event) => {
		this.props.changeDescription(event.target.value);
	}

	handleChangeImage = (event) => {
		this.props.changeImage(event.target.value);
	}

	handleChangeSound = (event) => {
		this.props.changeSound(event.target.value);
	}

	render() {
	    return (
	    	<div className="EventOther">
				<div className="eventAbstract">
					<p className="eventAbstract_inputGroup_label">ajouter des compléments</p>
					<textarea 
						className="textarea_inputGroup_champ"
						rows="10" 
						cols="50"
						placeholder="que s'est-il passé ?" 
						onChange={this.handleChangeDescription} 
					/>
				</div>
				<input 
					type="hidden" 
					className="MAX_FILE_SIZE" 
					value="12345" 
				/>
				<input 
					className="eventComplement_button" 
					id="eventComplement_button_img"
					type="file"
					accept="file_extension|video/*|image/*|"
					onChange={this.handleChangeImage} 
				/>
				<input 
					className="eventComplement_button" 
					id="eventComplement_button_sound" 
					type="file"
					accept="file_extension|audio/*|"
					onChange={this.handleChangeSound}
				/>
			</div>
		)
	}
}

export default EventOther;