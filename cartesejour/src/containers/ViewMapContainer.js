import { connect } from "react-redux";
import ViewMap from "../components/ViewMap/ViewMap";
import { addBlocEvent } from "../actions/actionsCreator";

const mapStateToProps = state => {
	return {
		tripName: state.tripName,
		mapName: state.mapName
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addBlocEvent: () => dispatch(addBlocEvent()),
// 		changeMapName: mapName => dispatch(chancheMapName(mapName))
	};
};

const ViewMapContainer = connect(mapStateToProps, mapDispatchToProps)(ViewMap);

export default ViewMapContainer;