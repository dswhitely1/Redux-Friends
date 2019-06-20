import React from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';

const FriendList = props => {
  console.log(props);
  const {friends} = props;
  return (
    <>
      {friends.map( friend => <Friend {...props} friend={friend} /> )}
    </>
  );
};

const mapStateToProps = state => ({friends: state.friends.friends});

export default connect( mapStateToProps )( FriendList );

