import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'

class UserList extends Component {

    createListItems() {
        return this.props.users.map(
            (user) => {
                return (
                    <li key = {user.id}
                        onClick = {() => this.props.selectUser(user)}
                    >
                        {user.first}
                    </li>
                );
        });
    }
    
    render () {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

//dispatch just means call a function
function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);