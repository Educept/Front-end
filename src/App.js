import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system'
import { Route, Switch, Redirect } from 'react-router-dom'; 

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm={6}>
              Educept
            </Col>
            <Col sm={6}>
              Place links here
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
