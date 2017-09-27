import React, { Component } from 'react';
import ViewMapToolbar from './ViewMapToolbar.js';
import CarteContainer from '../../containers/CarteContainer.js';
import Legend from './Legend.js';
import { Link } from "react-router-dom";

import styleViewMap from "./Styles/styleViewMap.css";

class ViewMap extends Component {
	render() {
    	return (
			<div className="viewMap">
				<div className="viewMap_Infos">
					<div className="viewMap_container_TripName">{this.props.tripName}</div>
					<div className="viewMap_container_MapName">{this.props.mapName}</div>
				</div>
				<div className="viewMap_container">
					<div className="viewMap_Tools">
						<div className="viewMap_Tools_buttons_group">
							<button className="viewMap_Tools_buttons" id="viewMap_Tools_button_edit"/>
							<button className="viewMap_Tools_buttons" id="viewMap_Tools_button_export"/>
							<button className="viewMap_Tools_buttons" id="viewMap_Tools_button_share"/>
						</div>
						<ViewMapToolbar 
							className="viewMap_Tools_components" 
							id="range_ViewMap_zoom"
						/>
					</div>
					<div className="viewMap_container_MapLegend">
						<CarteContainer className="viewmap_components" />
						<Legend className="viewmap_components" />
					</div>
					<Link to={"/createevent"}><button className="ViewMap_container_buttons_submit"onClick={this.props.addBlocEvent}>créer un nouvel élément</button></Link>
				</div>
			</div>
		);
	}
}

export default ViewMap;