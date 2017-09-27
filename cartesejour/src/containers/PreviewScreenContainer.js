import { connect } from "react-redux";
import PreviewScreen from "../components/CreateEvent/PreviewScreen";

const mapStateToProps = state => {
	//console.log ("previewScreen state :" +state)
	return {
		feelingValue: state.mapElements[state.indexMapElements].feelingValue,
		feeling: state.mapElements[state.indexMapElements].feeling,
		angle: state.mapElements[state.indexMapElements].angle,
		eventType: state.mapElements[state.indexMapElements].eventType

	};
};

const PreviewScreenContainer = connect(mapStateToProps)(PreviewScreen);

export default PreviewScreenContainer;

