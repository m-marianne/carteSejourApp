import { connect } from "react-redux";
import { changeTripName, changeMapName, changeTripId, changeMapId } from "../actions/actionsCreator"; // changeMapIdchangeTrip, changeMap 
import NewMap from "../components/NewMap/NewMap";

const mapStateToProps = state => {
	return {
		tripName: state.tripName,
		mapName: state.mapName,
		tripId: state.tripId,
		mapId: state.mapId
		// trip: state.trip,
		// map: state.map
	};
};

const mapDispatchToProps = dispatch => {
	return { 
		// changeTrip: (id, value) => dispatch(changeTrip(id, value)),
		// changeMap: (id, value) => dispatch(changeMap(id, value)),
		changeTripName: (value) => dispatch(changeTripName(value)),
		changeMapName: (value) => dispatch(changeMapName(value)),
		changeTripId: (value) => dispatch(changeTripId(value)),
		changeMapId: (value) => dispatch(changeMapId(value)),
	};
};

const NewMapContainer = connect(mapStateToProps, mapDispatchToProps)(NewMap);

export default NewMapContainer;