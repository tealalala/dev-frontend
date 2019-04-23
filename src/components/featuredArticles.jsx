import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class FeaturedArticles extends Component {
  render() {
    return (
      <div>
        
        <Card style={{ width: '18rem', float: 'right' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Tabs>
              <Tab title="For Mentors">
                // put mentor article component in self closing tag here
              </Tab>
              <Tab title="For Mentees">
                // put mentee article component in self closing tag here
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </div>


    )
  }
}

export default FeaturedArticles;