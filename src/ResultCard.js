import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import CardHeader from './CardHeader';

import './ResultCard.css'

const ResultCard = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="card">
              <CardHeader headerText="Result" />
              <div className="result-body">
                You got {props.numCorrect}/{props.numTotal} correct.
              </div>
            </div>
          </Col>
        </Row>  
      </Container>
    </div>
  );
};

export default ResultCard;