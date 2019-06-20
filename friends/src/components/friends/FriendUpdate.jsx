import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Form
} from 'react-bootstrap';
import Loader from 'react-loader-spinner';

class FriendUpdate extends Component {
  state = {
    friend: {
      name : '',
      age  : 0,
      email: ''
    }
  };

  componentDidMount() {
    if (this.props.friends[this.props.match.params.id]) {
      this.setState( {friend: this.props.friends[this.props.match.params.id]} );
    }
  }

  handleChanges = e => {
    this.setState( {[e.target.name]: e.target.value} );
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <h2>Update Friend</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Name'
                          value={this.state.friend.name}
                          name='name' onChange={this.handleChanges} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control type='number' placeholder='Age'
                          value={this.state.friend.age}
                          name='age' onChange={this.handleChanges} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Email Address'
                          value={this.state.friend.email} name='email'
                          onChange={this.handleChanges} />
          </Form.Group>
          <Form.Group>
            <Button type='submit'>{this.props.isUpdating ?
              <Loader type="ThreeDots" color="#fbf7f5"
                      height={24}
                      width={50} /> : `Update`}</Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  isUpdating: state.updatingFriend,
  friends   : state.friends
});

export default connect( mapStateToProps )( FriendUpdate );