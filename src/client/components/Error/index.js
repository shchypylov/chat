import React, {Component} from 'react';

class Error extends Component {

	state = {
		visible: false
	}

	componentDidMount() {
		if (this.props.data) {
			this.setState({
				visible: true
			})
		}
	}

	render() {
		const {data} = this.props
		const {visible} = this.state
		console.log("--- ", data);
		return (
			<div className="error">
				Hello
			</div>
		);
	}
}

export default Error
