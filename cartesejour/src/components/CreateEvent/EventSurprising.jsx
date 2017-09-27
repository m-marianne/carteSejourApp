import React, { Component } from "react";
import styleRange from "./Styles/styleRange.css";


class EventSurprising extends Component {

	constructor(props) {
		super(props);
		this.state = {
			boundMin: '1',
			boundMax: '100'
		};
	}

	handleChangeB = (event) => {
		this.props.changeSurprising(parseInt(event.target.value, 10));
	}

	render() {
	
	    return (

			<div className="EventSurprising">
				<div className="range_group">
					<label className="form_label">
					taux de surprise
						<input 
							id="range_eventForecast1" 
							className="range"
							type="range" 
							min="1" max="100" 
							step="1" 
							value={this.state.value} 
							onChange={this.handleChangeB} 
							required 
						/>
						<div className="range_label_valuesContainer">
							<p>{this.state.boundMin}</p><p>{this.state.boundMax}</p>
						</div>
					</label>
				</div>
			</div>
		)
	}
}

export default EventSurprising;