import React, { Component } from "react";

class EventImpression extends Component {
	constructor(props) {
		super(props);
		this.state = {
			check:false,
			boundMin: 'negatif',
			boundMax: 'positif'
		};
	}

	handleChange = (event) => {
		this.props.changeImpression(parseInt(event.target.value, 10));
	}

	render() {
	
	    return (

			<div className="EventFeeling">
				<div className="range_group">
					<label className="form_label">
					ressenti de l'événement
						<input 
							type="range" 
							id="range_eventFeeling1" 
							className="range" 
							min="1" 
							max="100" 
							step="1" 
							onChange={this.handleChange}
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

export default EventImpression;