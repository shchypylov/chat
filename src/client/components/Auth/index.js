import React, {Component} from 'react';
import {reduxForm, Field} from "redux-form";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {authUser} from "../../actions";


let Login = props => {
	const {handleSubmit} = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="login">Login</label>
				<Field name="login" component="input" type="text"/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<Field name="password" component="input" type="password"/>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
};

Login = reduxForm({
	// a unique name for the form
	form: 'login'
})(Login);


class Auth extends Component {

	submitHandle = (data) => {
		this.props.authUser(data);
	};

	render() {
		return (
			<div>
				<Login onSubmit={this.submitHandle}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

const mapDispatchToProps = {
	authUser,
}

export default withRouter(connect(
	mapStateToProps, mapDispatchToProps
)(Auth));
