import React, {Component} from 'react';
import Home from "../Home";
import Auth from "../Auth";
import {Switch, Route} from "react-router-dom";
import "./index.scss";
import history from "../../config/history";

const Test = () => {
	return (
		<div>Hello,world</div>
	)
}

class App extends Component {

	componentDidMount() {
		let userID = localStorage.getItem("userID");
		if (userID) {
			history.push("/")
		} else {
			history.push("login")
		}
	}
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/login" component={Auth}/>
			</Switch>
		);
	}
}

export default App
