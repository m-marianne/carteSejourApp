export const ADD_BLOC_EVENT = 'ADD_BLOC_EVENT';
export const CHANGE_TRIP_NAME = 'CHANGE_TRIP_NAME';
export const CHANGE_TRIP_ID = 'CHANGE_TRIP_ID';
export const CHANGE_MAP_NAME = 'CHANGE_MAP_NAME';
export const CHANGE_MAP_ID = 'CHANGE_MAP_ID';
// export const CHANGE_TRIP = 'CHANGE_TRIP';
// export const CHANGE_MAP = 'CHANGE_MAP';
export const CHANGE_DATE = 'CHANGE_DATE';
export const CHANGE_TIME = 'CHANGE_TIME';
export const CHANGE_MOMENT = 'CHANGE_MOMENT';
export const CHANGE_TYPE = 'CHANGE_TYPE';
export const CHANGE_FORECAST = 'CHANGE_FORECAST';
export const CHANGE_SURPRISING = 'CHANGE_SURPRISING';
export const CHANGE_IMPRESSION = 'CHANGE_IMPRESSION';
export const CHANGE_IMPORTANCE = 'CHANGE_IMPORTANCE';
export const CHANGE_FEELING_ID = 'CHANGE_FEELING_ID';
export const CHANGE_FEELING = 'CHANGE_FEELING';
export const CHANGE_FEELING_VALUE = 'CHANGE_FEELING_VALUE';
export const CHANGE_ANGLE = 'CHANGE_ANGLE';
export const RESET_FEELING = 'RESET_FEELING';
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const CHANGE_IMAGE ='CHANGE_IMAGE';
export const CHANGE_SOUND = 'CHANGE_SOUND';

export function addBlocEvent() {
	return {
		type: 'ADD_BLOC_EVENT'
	}
}

// export function changeTrip(tripId, tripName) {
// 	let trip = {tripId, tripName}; 
// 	return {
// 		type: 'CHANGE_TRIP',
// 		trip: trip
// 	}
// }

// export function changeMap(mapId, mapName) {
// 	let map = {mapId, mapName};
// 	return {
// 		type: 'CHANGE_MAP',
// 		map: map
// 	}
// }

export function changeTripName(tripName) {
	return {
		type: 'CHANGE_TRIP_NAME',
		tripName
	}
}

export function changeTripId(tripId) {
	return {
		type: 'CHANGE_TRIP_ID',
		tripId
	}
}

export function changeMapName(mapName) {
	return {
		type: 'CHANGE_MAP_NAME',
		mapName
	}
}

export function changeMapId(mapId) {
	return {
		type: 'CHANGE_MAP_ID',
		mapId
	}
}

export function changeDate(eventDate) {
  return {
    type: 'CHANGE_DATE',
    eventDate
  }
}

export function changeTime(eventTime) {
	return {
		type: 'CHANGE_TIME',
		eventTime
	}
}

export function changeMoment(eventMoment) {
	return {
		type: 'CHANGE_MOMENT',
		eventMoment
	}
}

export function changeType(eventType) {
	return {
		type: 'CHANGE_TYPE',
		eventType
	}
}

export function changeForecast(eventForecast) {
	return {
		type: 'CHANGE_FORECAST',
		eventForecast
	}
}

export function changeSurprising(eventSurprising) {
	return {
		type: 'CHANGE_SURPRISING',
		eventSurprising
	}
}

export function changeImpression(eventImpression) {
	return {
		type: 'CHANGE_IMPRESSION',
		eventImpression
	}
}

export function changeImportance(eventImportance) {
	return {
		type: 'CHANGE_IMPORTANCE',
		eventImportance
	}
}

export function changeFeelingId(feelingId) {
	return {
		type: 'CHANGE_FEELING_ID',
		feelingId
	}
}

export function changeFeeling(feelingId, feelingColor) {
	//console.log(feelingId, feelingColor)
	let feeling = {};
	feeling[feelingId] = feelingColor; //récupère la valeur résultat de l'event correspondant à la clé passsée comme index
	return {
		type: 'CHANGE_FEELING',
		feeling: feeling
	}
}

export function changeFeelingValue(feelingId, feelingImportance) {
	//console.log(feelingId, feelingImportance)
	let feelingValue = {};
	feelingValue[feelingId] = feelingImportance; 
	return {
		type: 'CHANGE_FEELING_VALUE',
		feelingValue: feelingValue
	}
}

export function changeAngle(feelingId, angleRandom) {
	//console.log(feelingId, feelingImportance)
	let angle = {};
	angle[feelingId] = angleRandom; 
	return {
		type: 'CHANGE_ANGLE',
		angle: angle
	}
}

export function resetFeeling(feelingId, feelingColor, feelingImportance, angleRandom) {
	//console.log(feelingId, feelingColor)
	let feeling = {};
	let feelingValue = {};
	let angle = {};
	feeling[feelingId] = feelingColor ? feelingColor : null;
	feelingValue[feelingId] = feelingImportance ? feelingImportance : null; 
	angle[feelingId] = angleRandom ? angleRandom : null; 
	return {
		type: 'RESET_FEELING',
		feeling: feeling,
		feelingValue: feelingValue,
		angle: angle
	}
}

export function changeDescription(eventDescription) {
	return {
		type: 'CHANGE_DESCRIPTION',
		eventDescription
	}
}

export function changeImage(img) {
	return {
		type: 'CHANGE_IMAGE',
		img
	}
}

export function changeSound(sound) {
	return {
		type:'CHANGE_SOUND',
		sound
	}
}