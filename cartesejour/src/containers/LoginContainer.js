import { connect } from "react-redux";
import { getUserId, getUsername, getPassword, getToken } from "../actions/actionsCreator"; 
import Login from "../components/Login/Login";

const mapStateToProps = state => {
	return {
		token: state.token,
		userId: state.userId,
		username: state.username,
		password: state.password
	};
};

const mapDispatchToProps = dispatch => {
	return { 
		getUserId: 		(value) => dispatch(getUserId(value)),
		getUsername: 	(value) => dispatch(getUsername(value)),
		getPassword: 	(value) => dispatch(getPassword(value)),
		getToken: 		(value) => dispatch(getToken(value)),
	};
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;

