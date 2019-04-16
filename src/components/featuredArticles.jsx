import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class FeaturedArticles extends Component {
  render() {
    return (
      <Tabs>
        <Tab title="For Mentors">
          <h1>Some articles here</h1>
        </Tab>
        <Tab title="For Mentees">
          <h2>Other articles here</h2>
        </Tab>
      </Tabs>

    )
  }
}

export default FeaturedArticles;