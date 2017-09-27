import React, { Component } from "react";
import TypeList from "./TypeList";
import styleType from "./Styles/styleType.css";


class EventType extends Component {

	constructor(props) {
		super(props);
		this.state = {
			check:false,
		};
	}


	changeType = (newType) => {
		this.props.changeType(newType);
		// this.setState({checked: !this.state.checked});
	}

	render() {
	    return (
			<div className="EventType">
			<TypeList 
				className="EvenType_options"
				changeType={this.changeType}
			/>	
			</div>
		)
	}
}

export default EventType;