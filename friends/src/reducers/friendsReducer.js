import types from '../actions';

const initialState = {
  deletingFriend : false,
  fetchingFriends: false,
  friends        : [],
  loggingIn      : false,
  savingFriends  : false,
  updatingFriend : false,
  error          : null
};

export default ( state = initialState, action ) => {
  const {type, payload} = action;

  switch (type) {
    case types.FETCH_FRIEND_START:
      return {...state};
    case types.FETCH_FRIEND_SUCCESS:
      return {...state};
    case types.FETCH_FRIEND_FAILURE:
      return {...state};
    case types.SAVE_FRIEND_START:
      return {...state};
    case types.SAVE_FRIEND_SUCCESS:
      return {...state};
    case types.SAVE_FRIEND_FAILURE:
      return {...state};
    case types.UPDATE_FRIEND_START:
      return {...state};
    case types.UPDATE_FRIEND_SUCCESS:
      return {...state};
    case types.UPDATE_FRIEND_FAILURE:
      return {...state};
    case types.DELETE_FRIEND_START:
      return {...state};
    case types.DELETE_FRIEND_SUCCESS:
      return {...state};
    case types.DELETE_FRIEND_FAILURE:
      return {...state};
    case types.LOGIN_START:
      return {...state};
    case types.LOGIN_SUCCESS:
      return {...state};
    case types.LOGIN_FAILURE:
      return {...state};
    default:
      return state;
  }
}