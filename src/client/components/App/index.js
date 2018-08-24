import React, {Component} from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import cookie from 'react-cookies'

import Home from "../Home";
import Error from "../Error";
import Auth from "../Auth";
import "./index.scss";
import history from "../../config/history";


class App extends Component {

	componentDidMount() {
		let userID = cookie.load("userID");
		if (userID) {
			history.push("/")
		} else {
			history.push("/login")
		}
	}

	render() {
		const {error} = this.props;
		return (
			<div className="app">
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/login" component={Auth}/>
				</Switch>
				<Error data={error}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return ({
		user: state.user,
		error: state.error
	})
}

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
