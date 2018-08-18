import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./index.scss";

class App extends Component {
    render() {
        return (
            <div>
                Hello friend
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(App);
