import React, { Component } from "react";

class ViewMapToolbar extends Component {
	render() {
	    return (
	    	<div className="toolbar">
				<input 
					type="range" 
					id={this.props.id} 
					className="toolbar_zoom_range" 
					min="0" 
					max="100" 
					step="1" 
					onChange={this.handleChange}
				/>
				<div className="toolbar_zoom_valuesContainer">
					<span>-</span><span>+</span>
				</div>
			</div>
		)
	}
}

export default ViewMapToolbar;