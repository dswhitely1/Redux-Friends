import React from 'react';
import {Route} from 'react-router-dom';


import FriendLogin from './friends/FriendLogin';
import Container from 'react-bootstrap/Container';
import PrivateRoute from './util/PrivateRoute';
import FriendContainer from './friends/FriendContainer';
import FriendUpdate from './friends/FriendUpdate';

const App = () => {
  return (
    <Container>
      <Route path='/login' component={FriendLogin} />
      <PrivateRoute path='/dashboard' component={FriendContainer} />
      <PrivateRoute path='/update/:id' component={FriendUpdate} />
    </Container>
  );
};

export default App;
