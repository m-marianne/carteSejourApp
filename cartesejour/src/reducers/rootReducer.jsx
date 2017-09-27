import 	{ 
	ADD_BLOC_EVENT, CHANGE_TRIP_ID, CHANGE_MAP_ID, CHANGE_TRIP_NAME, 
	CHANGE_MAP_NAME, CHANGE_DATE, CHANGE_TIME, 
	CHANGE_MOMENT, CHANGE_TYPE, CHANGE_FORECAST, CHANGE_SURPRISING, 
	CHANGE_IMPRESSION, CHANGE_IMPORTANCE, CHANGE_FEELING_ID, 
	CHANGE_FEELING,CHANGE_FEELING_VALUE, CHANGE_ANGLE, RESET_FEELING, 
	CHANGE_DESCRIPTION, CHANGE_IMAGE, CHANGE_SOUND
} from "../actions/actionsCreator";
//CHANGE_MAP, CHANGE_TRIP
const blocEvent = {

	eventDate: '',
	eventTime: '',
	eventMoment: '',
	eventType: '',
	eventForecast: 0,
	eventSurprising: 50,
	eventImpression: 50,
	eventImportance: 1,
	feelingId: [],
	feeling: {'feeling1' : null, 'feeling2' : null, 'feeling3' : null, 'feeling4': null,  'feeling5': null}, // si plusieurs sentiments l'ordre ici suivra le même sur le second tableau qui récupère les données sur l'importance du sentiment
	feelingValue: {'feeling1' : null, 'feeling2' : null, 'feeling3' : null, 'feeling4': null,  'feeling5': null},
	angle: {'feeling1' : null, 'feeling2' : null, 'feeling3' : null, 'feeling4': null,  'feeling5': null},
	eventDescription: '',
	img: '',
	sound: '',
}

export const defaultState = {
	indexMapElements: 0,
	mapElements: [ blocEvent ],
	tripName: '',
	tripId: '',
	mapName: '',
	mapId: ''
	// trip: {'tripId' : null, 'tripName': null },
	// map: {'mapId': null, 'mapName': null }	
};

export const rootReducer = (state = defaultState, action) => {
	//console.log(state);
	switch(action.type){
		case ADD_BLOC_EVENT:
			return {
				...state,
				mapElements: [ 
					...state.mapElements,
					blocEvent 
				],
				indexMapElements: state.indexMapElements+1
			};
		// case CHANGE_TRIP:
		// 	return {
		// 		...state,
		// 		trip: Object.assign({}, state.trip, action.trip)
		// 	};
		// case CHANGE_MAP:
		// 	return {
		// 		...state,
		// 		map: Object.assign({}, state.map, action.map)
		// 	}
		case CHANGE_TRIP_NAME:
			return {
				...state,
				tripName: action.tripName	
			};
		case CHANGE_TRIP_ID:
			return {
				...state,
				tripId: action.tripId	
			};
		case CHANGE_MAP_NAME:
			return {
				...state,
				mapName: action.mapName
			};
		case CHANGE_MAP_ID:
			return {
				...state,
				mapId: action.mapId
			};	
		case CHANGE_DATE:
			let newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				eventDate : action.eventDate 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_TIME:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				eventTime : action.eventTime 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_MOMENT:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				eventMoment : action.eventMoment 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_TYPE:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				eventType : action.eventType 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_FORECAST:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				eventForecast : action.eventForecast 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_SURPRISING:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				eventSurprising : action.eventSurprising 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_IMPRESSION:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				eventImpression : action.eventImpression 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_IMPORTANCE:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				eventImportance : action.eventImportance
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_FEELING_ID:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				feelingId : action.feelingId 
			}
			return {
				...state,
				mapElements : newTabEvenement
				
			};
		case CHANGE_FEELING:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				feeling: Object.assign({}, state.mapElements[state.indexMapElements].feeling, action.feeling) 
			}
			return {
				...state,
				mapElements : newTabEvenement
				
			};
		case CHANGE_FEELING_VALUE:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				feelingValue: Object.assign({}, state.mapElements[state.indexMapElements].feelingValue, action.feelingValue) 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_ANGLE:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				angle: Object.assign({}, state.mapElements[state.indexMapElements].angle, action.angle) 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case RESET_FEELING:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				feeling: Object.assign({}, state.mapElements[state.indexMapElements].feeling, action.feeling), 
				feelingValue: Object.assign({}, state.mapElements[state.indexMapElements].feelingValue, action.feelingValue),
				angle: Object.assign({}, state.mapElements[state.indexMapElements].angle, action.angle) 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		
		case CHANGE_DESCRIPTION:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				eventDescription : action.eventDescription 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_IMAGE:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				img : action.img 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		case CHANGE_SOUND:
			newTabEvenement = [...state.mapElements]
			newTabEvenement[state.indexMapElements] = {
				...newTabEvenement[state.indexMapElements], 
				sound : action.sound 
			}
			return {
				...state,
				mapElements : newTabEvenement
			};
		default:
			return state;
	}
};