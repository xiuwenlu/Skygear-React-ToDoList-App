require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import UserList from './user-list';
import UserDetail from './user-detail';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h2> Username List: </h2>
        <UserList />
        <hr/>
        <h2> User Details: </h2>
        <UserDetail />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
