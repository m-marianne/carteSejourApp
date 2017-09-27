import React, { Component } from 'react';

class InputRange extends Component{

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className="range_group">
				<label className="eventForecastGroup_range_label">
					<input type="range" id="range_eventForecast1" className="range" min="0" max="100" step="1" value={this.state.value} 
							onChange={this.handleChangeB} required />
					{this.state.value} 
				</label>
				<div className="eventForecastGroup_range_label_valuesContainer">
					<p>{this.state.value}</p><p>{this.state.value}</p>
				</div>
			</div>
		)
	}

}