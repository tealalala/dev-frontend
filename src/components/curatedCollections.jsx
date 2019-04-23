import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CuratedCollections extends Component {

  render() {
    return (
      //list of resources based on rating need to set up rating system for this to work or for the code to even be written. 
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <h1> Curated Collections section</h1>
            <Button variant="secondary"> Does nothing </Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default CuratedCollections;