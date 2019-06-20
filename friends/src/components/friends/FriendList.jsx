import React from 'react';
import { connect } from 'react-redux';

const FriendList = props => {
  return (
    <h1>FriendList</h1>
  );
};

const mapStateToProps = state => ({friends: state.friends});

export default connect( mapStateToProps )( FriendList );

