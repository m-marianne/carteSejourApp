import React, { Component } from "react";
import TypeSection from "./TypeSection";
import styleType from "./Styles/styleType.css";


class EventType extends Component {

	constructor(props) {
		super(props);
		this.state = {
			check:false,
		};
	}


	handleChangeEventTypeParent = (event) => {
		this.props.changeType(event);
		// this.setState({checked: !this.state.checked});
	}

	render() {
	    return (
			<div className="EventType">
			<TypeSection 
				className="EvenType_options"
				eventType={this.handleChangeEventTypeParent}
			/>	
			</div>
		)
	}
}

export default EventType;