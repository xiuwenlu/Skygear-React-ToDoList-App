import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {
        //this checks if on load a no user is selected yet
        // just asks it to select something first
        if (!this.props.user) {
            return (<h4> Select a user...</h4>);
        }
        return (
            <div>
                <h2>{this.props.user.first}</h2>
                <p>Description: {this.props.user.description}</p>
            </div>
        );
    }
}
function mapStateTopProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateTopProps)(UserDetail);