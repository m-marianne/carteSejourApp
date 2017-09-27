import 	{ 
	CHANGE_TRIP_NAME, CHANGE_MAP_NAME, CHANGE_DATE, CHANGE_TIME, 
	CHANGE_MOMENT, CHANGE_TYPE, CHANGE_FORECAST, CHANGE_SURPRISING, 
	CHANGE_IMPRESSION, CHANGE_IMPORTANCE, CHANGE_FEELING_ID, 
	CHANGE_FEELING,CHANGE_FEELING_VALUE, RESET_FEELING, 
	CHANGE_DESCRIPTION, CHANGE_IMAGE
} from "../actions/actionsCreator";

const blocEvent = {
	tripName: '',
	mapName: '',
	eventDate: '',
	eventTime: '',
	eventMoment: '',
	eventType: '',
	eventForecast: false,
	eventSurprising: 50,
	eventImpression: 50,
	eventImportance: 1,
	feelingId: [],
	feeling: {'feeling1' : null, 'feeling2' : null, 'feeling3' : null, 'feeling4': null,  'feeling5': null}, // si plusieurs sentiments l'ordre ici suivra le même sur le second tableau qui récupère les données sur l'importance du sentiment
	feelingValue: {'feeling1' : null, 'feeling2' : null, 'feeling3' : null, 'feeling4': null,  'feeling5': null},
	eventDescription: '',
	img: '',
	sound: '',
	}

export const defaultState = {
	indexEvenement: 0,
	tabEvenement: [ ...blocEvent ]	
};

export const rootReducer = (state = defaultState, action) => {
	//console.log(state);
	switch(action.type){
		case 'CHANGE_TRIP_NAME':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					tripName: action.tripName
				}
			};
		case 'CHANGE_MAP_NAME':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					mapName: action.mapName
				}
			};
		case 'CHANGE_DATE':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					eventDate: action.eventDate
				}
			};
		case 'CHANGE_TIME':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					eventTime: action.eventTime
				}
			};
		case 'CHANGE_MOMENT':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					eventMoment: action.eventMoment
				}
			};
		case 'CHANGE_TYPE':
			return {
				...state,
					tabEvenement: {
					...state.tabEvenement,
					eventType: action.eventType
				}
			};
		case 'CHANGE_FORECAST':
			return {
				...state,
					tabEvenement: {
					...state.tabEvenement,
					eventForecast: action.eventForecast
				}
			};
		case 'CHANGE_SURPRISING':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					eventSurprising: action.eventSurprising
				}
			};
		case 'CHANGE_IMPRESSION':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					eventImpression: action.eventImpression
				}
			};
		case 'CHANGE_IMPORTANCE':
			return {
				...state,
					tabEvenement: {
					...state.tabEvenement,
					eventImportance: action.eventImportance
				}
			};
		case 'CHANGE_FEELING_ID':
				return {
					...state,
						tabEvenement: {
						...state.tabEvenement,
						feelingId: [...state.feelingId, action.feelingId]
					}
				}
		case 'CHANGE_FEELING':
			return Object.assign({}, state, {feeling: Object.assign({}, state.feeling, action.feeling)});

		case 'CHANGE_FEELING_VALUE':
			return Object.assign({}, state, {feelingValue: Object.assign({}, state.feelingValue, action.feelingValue)});
		
		case 'RESET_FEELING':
			return Object.assign({}, state, {feeling: Object.assign({}, state.feeling, action.feeling)}, {feelingValue: Object.assign({}, state.feelingValue, action.feelingValue)});
		
		case 'CHANGE_DESCRIPTION':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					eventDescription: action.eventDescription
				}
			};
		case 'CHANGE_IMAGE':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					img: action.img
				}
			};
		case 'CHANGE_SOUND':
			return {
				...state,
				tabEvenement: {
					...state.tabEvenement,
					sound: action.sound
				}
			};
		default:
			return state;
	}
};