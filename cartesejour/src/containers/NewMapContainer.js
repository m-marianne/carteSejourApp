import { connect } from "react-redux";
import { changeTripName, changeMapName, changeTripId, changeMapId } from "../actions/actionsCreator";
import NewMap from "../components/NewMap/NewMap";

const mapStateToProps = state => {
	return {
		tripName: state.tripName,
		mapName: state.mapName,
		tripId: state.tripId,
		mapId: state.mapId
	};
};

const mapDispatchToProps = dispatch => {
	return { 
		changeTripName: (value) => dispatch(changeTripName(value)),
		changeMapName: 	(value) => dispatch(changeMapName(value)),
		changeTripId: 	(value) => dispatch(changeTripId(value)),
		changeMapId: 	(value) => dispatch(changeMapId(value)),
	};
};

const NewMapContainer = connect(mapStateToProps, mapDispatchToProps)(NewMap);

export default NewMapContainer;