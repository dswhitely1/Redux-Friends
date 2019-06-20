import React from 'react';
import {Route} from 'react-router-dom';


import FriendLogin from './friends/FriendLogin';
import Container from 'react-bootstrap/Container';
import PrivateRoute from './util/PrivateRoute';

const App = () => {
  var FriendContainer;
  return (
    <Container>
      <Route path='/login' component={FriendLogin} />
      <PrivateRoute path='/dashboard' component={FriendContainer} />
    </Container>
  );
};

export default App;
