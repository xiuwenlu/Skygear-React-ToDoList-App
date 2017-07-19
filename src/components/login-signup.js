import React, {Component} from 'react';

class LoginAndSignup extends Component {
    render() {
        return (
            <div className="row">
                <div id="sign-in">
                    <div className="labels">
                        <label>Username</label>
                        <input className="logins" type="text" id="username" required></input>
                    </div>
                    <div className="labels">
                        <label>Password</label>
                        <input className="logins" type="password" id="password" required></input>
                    </div>
                    <button id="log-in">Log In</button>
                    <div className="signup-switch">
                        <div className="labels">
                            <label>Confirm Password</label>
                            <input className="logins" type="password" id="passwordConf" required></input>
                        </div>
                        <button id="sign-up">Sign Up</button>
                    </div>
	            </div>
            </div>
        );
    }
}

export default LoginAndSignup;
