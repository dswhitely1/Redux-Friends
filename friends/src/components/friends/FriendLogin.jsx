import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Form
} from 'react-bootstrap';

import { doLogin } from '../../actions/login';

class FriendLogin extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChanges = e => {
    this.setState( {[e.target.name]: e.target.value} );
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log( 'I was called' );
    this.props.doLogin( this.state );
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder="Enter username" name='username'
                        value={this.state.username}
                        onChange={this.handleChanges} />
          <Form.Text
            className='text-muted'>{`Username is 'Lambda School'`}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password'
                        name='password' value={this.state.password}
                        onChange={this.handleChanges} />
          <Form.Text
            className='text-muted'>{`Password is 'i<3Lambd4'`}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Button type='submit'>Sign In</Button>
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = state => ({loggingIn: state.friends.loggingIn});

export default connect( mapStateToProps, {doLogin} )( FriendLogin );