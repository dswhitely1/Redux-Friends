import types from '../actions';

const authMiddleware = store => next => action => {
  if (action.type === types.LOGIN_SUCCESS) {
    console.log( `Token set with ${action.payload.payload}` );
  }

  next( action );
};

export default authMiddleware;