import React, { Component } from "react";
import styleRange from "./Styles/styleRange.css";


class EventForecast extends Component {

	constructor(props) {
		super(props);
		this.state = {
			check:false,
			boundMin: '0',
			boundMax: '100'
		};
	}

	handleChangeA = (event) => {
		this.props.changeEventForecastA(event.target.value);
	}

	handleChangeB = (event) => {
		this.props.changeEventForecastB(parseInt(event.target.value, 10));
	}

	render() {
	
	    return (

			<div className="EventForecast">
				<div className="eventForecast_part1">
					<label className="eventForecastGroup_label">
						<input 
							id="checkbox_eventForecast1"
							className="checkbox_case"
							type="radio"
							value="true"
							onChange={this.handleChangeA}
						/>
						prévu
					</label>
					<label className="eventForecastGroup_label">
						<input 
							id="checkbox_eventForecast2" 
							className="checkbox_case"
							type="radio"
							value="false"
							onChange={this.handleChangeA}  
						/>
						imprévu
					</label>
				</div>
				<div className="range_group">
					<label className="form_label">
					taux de surprise
					<input 
						id="range_eventForecast1" 
						className="range"
						type="range" 
						min="0" max="100" 
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

export default EventForecast;