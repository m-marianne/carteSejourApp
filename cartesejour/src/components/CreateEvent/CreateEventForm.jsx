import React, { Component } from "react";
import PropTypes from "prop-types";

import EventDate from "./EventDate";
import EventType from "./EventType";
import EventForecast from "./EventForecast";
import EventSurprising from "./EventSurprising";
import EventImportance from "./EventImportance";
import EventImpression from "./EventImpression";
import Feelings from "./Feelings";
import EventOther from "./EventOther";

class CreateEventForm extends Component{

	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);

	    this.state = {
    		eventDate:'',
			eventTime: '00:00',
			eventMoment: [],
			eventType: '',
			eventForecast: 0,
			eventSurprising: 50,
			eventFeeling: 50,
			eventImportance: 1,
			feelingId:'',
			feeling:'', // si plusieurs sentiments l'ordre ici suivra le même sur le second tableau qui récupère les données sur l'importance du sentiment
			feelingValue:'',
			angle:'',
			eventDescription: '',
			img: '',
			sound: '',
		}
	};

	

	componentDidMount() {	
	}

	handleFormSubmit = (event) => {
		console.log('vers viewmap');
		console.log(this.props.mapName);
		event.preventDefault();
		fetch('http://localhost:8000/events/', {
			method:'POST',
			headers: {
		    	'Accept': 'application/json',
		    	'Content-Type': 'application/json',
		    	'Authorization': 'Token 59edfa58d59b3b55eec1faf695e2ab34fe9d92fe' //'Token 22b3fbdb436411f03ec509f67a2a9248e2434144'
		    },
		  	body: JSON.stringify({
		  		
		  		"eventDate": this.props.mapElements[this.props.indexMapElements].eventDate,
			    "eventTime": this.props.mapElements[this.props.indexMapElements].eventTime,
			    "eventMoment": this.props.mapElements[this.props.indexMapElements].eventMoment,
			    "eventType": this.props.mapElements[this.props.indexMapElements].eventType,
			    "eventForecast": this.props.mapElements[this.props.indexMapElements].eventForecast,
			    "eventSurprising": this.props.mapElements[this.props.indexMapElements].eventSurprising,
			    "eventImpression": this.props.mapElements[this.props.indexMapElements].eventImpression,
			    "eventImportance": this.props.mapElements[this.props.indexMapElements].eventImportance,
			    "feeling": JSON.stringify(this.props.mapElements[this.props.indexMapElements].feeling),
			    "feelingValue": JSON.stringify(this.props.mapElements[this.props.indexMapElements].feelingValue),
			    "angle": JSON.stringify(this.props.mapElements[this.props.indexMapElements].angle),
			    "description": this.props.mapElements[this.props.indexMapElements].description,
			    "img": this.props.mapElements[this.props.indexMapElements].img,
			    "sound": this.props.mapElements[this.props.indexMapElements].sound,
			    "mapWrapper": this.props.mapId
		  	}), 
		  	redirect: 'follow'
		})
		.then((response) => {
			if(response.ok){
				return response.json();
				console.log(this.props.mapId)
			} else {
				alert("Tous les champs nécessaires au dessin ne sont pas remplis")
				console.log(this.props.mapId)
			}	
		})
		.catch(function(error) {
  			console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
		})
		this.context.router.history.push("/viewmap");
	}

	render(){
		return(
			<form className="createMapTools_Form" encType="multipart/data">
				<EventDate 
					className="createMap_container_tools_components" 
					changeDate={(eventDate) => this.props.changeDate(eventDate)} 
					changeTime={(eventTime) => this.props.changeTime(eventTime)} 
					changeMoment={(eventMoment) => this.props.changeMoment(eventMoment)}
				/>
				<EventType 
					className="createMap_container_tools_components" 
					changeType={(eventType) => this.props.changeType(eventType)} 
				/>
				<EventForecast 
					className="createMap_container_tools_components" 
					changeForecast={(eventForecast) => this.props.changeForecast(eventForecast)} 
				/>
				<EventSurprising 
					className="createMap_container_tools_components" 
					changeSurprising={(eventSurprising) => this.props.changeSurprising(eventSurprising)} 
				/>
				<EventImpression 
					className="createMap_container_tools_components"  
					changeImpression={(eventImpression) => this.props.changeImpression(eventImpression)} 
				/>
				<EventImportance 
					className="createMap_container_tools_components" 
					changeImportance={(eventImportance) => this.props.changeImportance(eventImportance)} 
				/>
				<Feelings 
					className="createMap_container_tools_components" 
					changeActiveFeeling={(feelingId) => this.props.changeActiveFeeling(feelingId)}
					changeFeeling={(id, feeling) => this.props.changeFeeling(id, feeling)}
					changeFeelingValue={(id, feelingValue) => this.props.changeFeelingValue(id, feelingValue)}
					changeAngle={(id, angle) => this.props.changeAngle(id, angle)}
					resetFeeling={(id, reset) => this.props.resetFeeling(id, reset)} 
				/>
				<EventOther 
					className="createMap_container_tools_components" 
					changeDescription={(eventDescription) => this.props.changeDescription(eventDescription)} 
					changeImage={(img) => this.props.changeImage(img)} 
					changeSound={(sound) => this.props.changeSound(sound)} 
				/>
				<input 
					type="submit" 
					className="createMap_container_buttons_submit" 
					onClick={this.handleFormSubmit} 
				/>
			</form>

		);
	}
}

export default CreateEventForm;


// Méthodes qui changent le state de chaque champ du formulaire (vide > saisis utilisateur) 
	//Méthode sans redux
		// changeDate = (newDate) => {
		// 	this.setState({eventDate:newDate});
		// }

		// changeTime = (newTime) => {
		// 	this.setState({eventTime: newTime});
		// }

		// changeMoment = (newMoment) => {
		// 	this.setState({eventMoment: newMoment});
		// }

		// changeEventType = (newEventType) => {
		// 	this.setState({eventType: newEventType});
		// }

		// changeEventForecastA = (newEventForecastA) => {
		// 	this.setState({eventForecast: newEventForecastA});
		// }

		// changeEventForecastB = (newEventForecastB) => {
		// 	this.setState({eventSurprising: newEventForecastB});
		// }

		// changeEventFeeling = (newEventFeeling) => {
		// 	this.setState({eventFeeling: newEventFeeling});
		// }

		// changeEventImportance = (newImportanceValue) => {
		// 	this.setState({eventImportance: newImportanceValue});
		// }

		// changeRangePosition = (newRangePosition) => {
		// 	this.setState({feeling_Nature: this.state.feeling_Nature.concat(newRangePosition)});
		// }

		// changeImportanceValue = (newImportanceValue) => {
		// 	this.setState({feeling_Importance: this.state.feeling_Importance.concat(newImportanceValue)});
		// }

		// changeDescription = (newDescription) => {
		// 	this.setState({abstract:newDescription});
		// }

		// changeImage = (newImage) => {
		// 	this.setState({img:newImage});
		// }

		// changeSound = (newSound) => {
		// 	this.setState({sound:newSound});
		// }
