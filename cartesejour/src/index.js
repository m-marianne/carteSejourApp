
import React from  "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/rootReducer";

import App from "./components/App";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store.getState());
ReactDOM.render(

	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'),
);
