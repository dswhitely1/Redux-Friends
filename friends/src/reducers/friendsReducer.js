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
    default:
      return state;
  }
}