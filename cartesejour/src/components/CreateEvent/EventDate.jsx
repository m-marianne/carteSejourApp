import React, { Component } from "react";

import DatePicker from "./DatePicker";
import MomentPie from "./MomentPie";

import styleDateTime from "./Styles/styleDateTime.css";

class EventDate extends Component {
	constructor(props) {
		super(props);

		this.state = {
		  	today: new Date(),
		  	year: '',
		  	month:'',
		  	day:'',
		  	valeur: ['nuit', 'après-midi', 'matin'],

		}
	};

	handleChangeEventDateParent = (date) => {
		this.props.changeDate(date);
	};

	getCurrentTime() {
        let currentDate = new Date();
        return currentDate.toTimeString().replace(/.*(\d{2}:\d{2})(:\d{2}).*/, "$1");
    };

    getTodayDay(){
    	let currentDay = new Date();
        let currentDayArray = currentDay.toLocaleDateString().split('/');
    	let newDay = currentDayArray[0];
    	return newDay;
    }

    getTodayMonth(){
    	let currentDay = new Date();
        let currentDayArray = currentDay.toLocaleDateString().split('/');
    	let newMonth = currentDayArray[1];
    	return newMonth;
    }

    getTodayYear(){
    	let currentDay = new Date();
        let currentDayArray = currentDay.toLocaleDateString().split('/');
    	let newYear = currentDayArray[2];
    	return newYear;
    }

	handleChangeDefaultYear = (today) => {
		this.setState({year:today.getFullYear()});
	}

	handleChangeDefaultMonth = (today) => {
		this.setState({month:today.getMonth()+1});
	}

	handleChangeDefaultDay = (today) => {
		this.setState({day:today.getDate()});
	}

	handleChangeTime = (event) => {
		this.props.changeTime(event.target.value);
	}

	changeMoment = (newEventMoment) =>{
       	this.props.changeMoment(newEventMoment);
   };

	// handleChangeParent = (event) => {
	// 	this.props.changeEventImportance(event.target.value);
	// }
	

	render(){
		return(
			<div className="EventDate">
				<div className="form_date_inputGroup">
					<label className="form_date_inputGroup_label"> Date de l'événement
						<DatePicker
							className="form_date_inputGroup_champ"
							year={this.getTodayYear()} 
							month={this.getTodayMonth()}
							day={this.getTodayDay()}
							eventDate={this.handleChangeEventDateParent}
							required  
						/>
					</label>
				</div>
				<div className="EventDate_Time" >
					<div className="form_date_inputGroup">
						<label className="form_date_inputGroup_label">Heure de l'événement
							<input 
								className="form_date_inputGroup_champ"
								type="time" 
								onChange={this.handleChangeTime}
								required 
							/>
						</label>
					</div>
					<div className="form_date_inputGroup" onChange={this.handleChangeParent} >
						<label className="form_date_inputGroup_label">Moment de l'événement
						<MomentPie 
							className="MomentPie" 
							changeMoment={this.changeMoment}
							onClick={this.handleChangeParent}
							valeur={this.state.valeur} 
							required 
						/>
						</label>
					</div>
				</div>
			</div>
		)
	}
}	

export default EventDate;



