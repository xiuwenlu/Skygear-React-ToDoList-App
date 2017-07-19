import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        //this checks if on load a no user is selected yet
        // just asks it to select something first
        // if (!this.props.assignment) {
        //     return (<h4> Select an assignment...</h4>);
        // }
        return (
            <div data-sticky-container>
                <header className='header' data-sticky data-options='marginTop:0;'  data-sticky-on='small' data-anchor='content'>
                    <div className='row' id='header'>
                        <div className='large-3 medium-5 small-6 columns'>
                            Skygear To-Do List                        
                        </div>
                        <div className='large-2 medium-3 small-6 columns text-right'>
                            <button className='switchButttons' data-track-button-label='Top Right'>Sign Up</button>
                            {/* <button className='switchButttons' data-track-button-label='Top Right'>Log In</button> */}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;