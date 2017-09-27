import { connect } from "react-redux";
import CreateEvent from "../components/CreateEvent/CreateEvent";

const mapStateToProps = state => {
	return {
		tripName: state.tripName,
		mapName: state.mapName,
	};
};

const CreateEventContainer = connect(mapStateToProps)(CreateEvent);

export default CreateEventContainer;
