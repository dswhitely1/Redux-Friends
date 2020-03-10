import React from 'react';

import {Card, Button} from 'react-bootstrap';

const Friend = ({name, age, email}) => {
  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>{`Age: ${age}`}</Card.Text>
        <Card.Text>{`Email: ${email}`}</Card.Text>
      </Card.Body>
      <Card.FOoter>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Card.FOoter>
    </Card>
  )
}

export default Friend;