import { connect } from "react-redux";
import { 
	changeDate, changeTime, changeMoment, changeType, changeForecast, changeSurprising, 
	changeImpression, changeImportance, changeFeelingId, changeFeeling, changeFeelingValue, 
	changeAngle, resetFeeling, changeDescription, changeImage, changeSound, 
} from "../actions/actionsCreator";
import CreateEventForm from "../components/CreateEvent/CreateEventForm";


const mapStateToProps = state => {
	return {
		...state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeDate:				eventDate 							=> dispatch(changeDate(eventDate)),
		changeTime: 			eventTime 							=> dispatch(changeTime(eventTime)),
		changeMoment: 			eventMoment 						=> dispatch(changeMoment(eventMoment)),
		changeType: 			eventType 							=> dispatch(changeType(eventType)),
		changeForecast: 		eventForecast						=> dispatch(changeForecast(eventForecast)),
		changeSurprising: 		eventSurprising 					=> dispatch(changeSurprising(eventSurprising)),
		changeImpression: 		eventImpression 					=> dispatch(changeImpression(eventImpression)),
		changeImportance: 		eventImportance 					=> dispatch(changeImportance(eventImportance)),
		changeActiveFeeling: 	feelingId 							=> dispatch(changeFeelingId(feelingId)),
		changeFeeling: 			(id, feelingColor)					=> dispatch(changeFeeling(id, feelingColor)),
		changeFeelingValue: 	(id, feelingValue) 					=> dispatch(changeFeelingValue(id, feelingValue)),
		changeAngle: 			(id, angleRandom)					=> dispatch(changeAngle(id, angleRandom)),
		resetFeeling: (id, feelingColor, feelingValue, angleRandom) => dispatch(resetFeeling(id, feelingColor, feelingValue, angleRandom)),
		changeDescription: 		eventDescription 					=> dispatch(changeDescription(eventDescription)),
		changeImage: 			img 								=> dispatch(changeImage(img)),
		changeSound: 			sound								=> dispatch(changeSound(sound)),
	};
};
const CreateEventFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);

export default CreateEventFormContainer;