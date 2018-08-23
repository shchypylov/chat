import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                Hello world!
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Home);
