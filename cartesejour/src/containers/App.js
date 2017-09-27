import { connect } from "redux";
import {} from "./actions/actionsCreator";
import App from './components/App';

const mapStateToProps = state => {
	return {
	...state,
	CreateMapToolsForm : state.CreateMapToolsForm,
	};
};

const mapDispatchToProps = dispatch =>{
	return {
	};
};
const App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;	