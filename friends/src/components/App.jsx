import React from 'react';
import {Route} from 'react-router-dom';


import FriendLogin from './friends/FriendLogin';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container>
      <Route path='/login' component={FriendLogin} />
    </Container>
  );
};

export default App;
