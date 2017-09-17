import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system'
import { Route, NavLink, Redirect } from 'react-router-dom'; 

import Flashcards from './Flashcards';
import Practice from './Practice';
import Sites from './Sites';
import Test from './Test';
import ResultCard from './ResultCard'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      uid: this.props.match.params.uid,
    }
  }

  render(props) {
    return (
      <div className="App">
        <div className="top-strip"></div>
        <Container>
          <Row id="nav-row">
            <Col md={8} className="title">
              <span className="blue">Edu</span>cept
            </Col>
            <Col lg={2} className="navLink"><NavLink to={`/practice/${this.state.uid}`} activeClassName="activeLink">Practice</NavLink></Col>
            <Col lg={2} className="navLink"><NavLink to={`/sites/${this.state.uid}`} activeClassName="activeLink">Sites</NavLink></Col>
          </Row>
        </Container>

        <Route path="/practice/" render={() => (
          <Practice uid={this.state.uid}/>
        )} /> 
        <Route path="/sites/" component={Sites} />
        <Route path="/test/practice/:uid/:subject/:numProblems" render={
          function(props) {
            return <Test type={props.match.params.subject} max={props.match.params.numProblems}/>
          }
        }/>
        <Route path="/test/results/:numCorrect/:numTotal" render={
          function(props) {
            return <ResultCard numCorrect={props.match.params.numCorrect} numTotal={props.match.params.numTotal} />
          }
        }/>
      </div>
    );
  }
}

export default App;
