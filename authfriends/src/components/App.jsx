import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';

import { useFinite } from '../hooks/useFinite';
import PrivateRoute from './auth/PrivateRoute';
import Login from './forms/Login';
import WelcomePage from './WelcomePage';

function App() {
  const [isStart, isSuccess, isError, startMachine] = useFinite();
  const [isAuth, newToken]                          = useAuth();

  if (isStart) {
    return <h3>Loading</h3>;
  } else {
    return (
      <>
        <AuthProvider value={isAuth}>
          <Switch>
            <PrivateRoute path="/dashboard" component={WelcomePage} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </>
    );
  }
}

export default App;