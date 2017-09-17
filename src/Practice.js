import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system'

import CardHeader from './CardHeader';
import SelectionCardBody from './SelectionCardBody'

import './Particles.css'

class Practice extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      subject: '',
      numOfQuestions: 0,
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="card">
                <CardHeader headerText="Practice Settings" />
                <SelectionCardBody subjects={['algebra', 'derivates', 'integrals']}/>
              </div>

            </Col>
          </Row>  
        </Container>
      </div>
    );
  }
}

export default Practice;