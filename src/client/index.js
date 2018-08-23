require('dotenv').config();
import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import ReduxThunk from 'redux-thunk'

import history from "./config/history";
import reduxStore from "./store";
import App from "./components/App";

const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reduxStore, reduxDevTools, applyMiddleware(ReduxThunk));

ReactDOM.render(
	<Router history={history}>
			<Provider store={store}>
				<App/>
			</Provider>
	</Router>,
	document.querySelector("#root")
)
