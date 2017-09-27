import { connect } from "react-redux";
import Carte from "../components/ViewMap/Carte";

const mapStateToProps = state => {
	console.log (state.mapElements)
	return {
		mapElements: state.mapElements,
		indexMapElements: state.indexMapElements
	};
};

const CarteContainer = connect(mapStateToProps)(Carte);

export default CarteContainer;