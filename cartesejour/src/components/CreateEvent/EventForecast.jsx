import React, { Component } from "react";
import styleForecast from "./Styles/styleForecast.css";

class EventForecast extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedOption: 0,
			value1: 0,
			value2: 50
		};
	}

	changeForecast = (event) => {
		this.props.changeForecast(event.target.value);
	}

	render() {
	
	    return (

			<div className="EventForecast">
				<label className="form_label">
				plannification de lévénement
					<div className="EventForecast_checkbox_group">
						<label className="eventForecastGroup_label">
							<input 
								id="checkbox_eventForecast1"
								className="checkbox_case"
								type="radio"
								value={this.state.value1}
								checked={this.state.selectedOption === this.state.value1}
								onChange={this.changeForecast}
							/>
							prévu
						</label>
						<label className="eventForecastGroup_label">
							<input 
								id="checkbox_eventForecast2" 
								className="checkbox_case"
								type="radio"
								value={this.state.value2}
								checked={this.state.selectedOption === this.state.value2}
								onChange={this.changeForecast}  
							/>
							imprévu
						</label>
					</div>
				</label>
			</div>
		)
	}
}

export default EventForecast;