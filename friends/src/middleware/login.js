import types from '../actions';

const authMiddleware = store => next => action => {
  if (action.type === types.LOGIN_SUCCESS) {
    localStorage.setItem( 'token', action.payload.payload );
  }

  next( action );
};

export default authMiddleware;