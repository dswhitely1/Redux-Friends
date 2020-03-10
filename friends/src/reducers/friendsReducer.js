import types from '../actions';

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export default ( state = initialState, action ) => {
  const {type, payload} = action;

  switch (type) {
    case types.FETCH_FRIEND_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case types.FETCH_FRIEND_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        error          : null
      };
    case types.FETCH_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false
      };
    case types.SAVE_FRIEND_START:
      return {
        ...state,
        savingFriends: true
      };
    case types.SAVE_FRIEND_SUCCESS:
      return {
        ...state,
        savingFriends: false,
        error        : null
      };
    case types.SAVE_FRIEND_FAILURE:
      return {
        ...state,
        savingFriends: false
      };
    case types.UPDATE_FRIEND_START:
      return {
        ...state,
        updatingFriend: true
      };
    case types.UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        updatingFriend: false,
        error         : null
      };
    case types.UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        updatingFriend: false
      };
    case types.DELETE_FRIEND_START:
      return {
        ...state,
        deletingFriend: true
      };
    case types.DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        error         : null
      };
    case types.DELETE_FRIEND_FAILURE:
      return {
        ...state,
        deletingFriend: false
      };
    case types.LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error    : null,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        errors: payload
      };
    default:
      return state;
  }
}