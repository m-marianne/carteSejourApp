import React, { Component } from "react";

import CreateEventFormContainer from "../../containers/CreateEventFormContainer";
import PreviewScreenContainer from "../../containers/PreviewScreenContainer";

import styleCreateEvent from "./Styles/styleCreateEvent.css";
import styleCreateEventPreview from "./Styles/styleCreateEventPreview.css";
import styleCreateEventTools from "./Styles/styleCreateEventTools.css";

class CreateEvent extends Component{

	render(){
		return(
			<div className="createMap">
				<div className="createMap_Infos">
					<div className="createMap_container_TripName">{this.props.tripName}</div>
					<div className="createMap_container_MapName">{this.props.mapName}</div>
				</div>
				<div className="createMap_container">
					<CreateEventFormContainer />
					<div className="createMap_container_preview">
						<PreviewScreenContainer className="createMap_container_preview_components" />
					</div>
				</div>
			</div>
		);
	}
}
export default CreateEvent;