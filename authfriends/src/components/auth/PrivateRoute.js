import React from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';
import { AuthConsumer } from '../../contexts/AuthContext';

const PrivateRoute = ( {component: Component, ...rest} ) => {
  return (
    <AuthConsumer>
      {props => {
        if (props) {
          return <Route {...rest} render={props => <Component {...props} />} />;
        } else {
          return <Redirect to='/' />;
        }
      }}
    </AuthConsumer>
  );
};

export default PrivateRoute;