import types from './';
import axios from 'axios';

export const {doLogin} = cred => async dispatch => {
  dispatch({type: types.LOGIN_START});
  try {
    const res = await axios.post( 'http://localhost:5000/api/login', cred );
    dispatch({type: types.LOGIN_SUCCESS, payload: res.data})
  } catch(error) {
    dispatch({type: types.LOGIN_FAILURE, payload: error.response.data});
  }
};

