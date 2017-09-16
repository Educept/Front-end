import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system'
import { Route, NavLink, Redirect } from 'react-router-dom'; 

import Flashcards from './Flashcards';
import Practice from './Practice';
import Sites from './Sites';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-strip"></div>
        <Container>
          <Row id="nav-row">
            <Col md={6} className="title">
              <span className="blue">Edu</span>cept
            </Col>
            <Col lg={2} className="navLink"><NavLink to="/flashcards" activeClassName="activeLink">Flashcards</NavLink></Col>
            <Col lg={2} className="navLink"><NavLink to="/practice" activeClassName="activeLink">Practice</NavLink></Col>
            <Col lg={2} className="navLink"><NavLink to="/sites" activeClassName="activeLink">Sites</NavLink></Col>
          </Row>
        </Container>


        <Route exact path="/" render={() => (
          <Redirect to="/flashcards"/>
        )}/>
        <Route exact path="/flashcards/:uid" Component={Flashcards} />
        <Route path="/practice/:uid" Component={Practice} />
        <Route path="/sites/:uid" Component={Sites} />
      </div>
    );
  }
}

export default App;
