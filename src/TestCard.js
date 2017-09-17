import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';

import CardHeader from './CardHeader';

import './TestCard.css'

const TestCard = props => {
  let toggle = 0;

  const submitAnswer = () => {
    if (toggle === 0) {
      let answerNumber = props.getAnswerIndex();
      let userAnswer = -1;
      document.querySelectorAll('.radio-input').forEach((input, index) => {
        if (input.checked) {
          userAnswer = index;
        }
      });

      if (props.checkAnswer(userAnswer, answerNumber)) {
        document.querySelector(`#radiob-${answerNumber}`).style.backgroundColor = '#76FF03';
      } else {
        document.querySelector(`#radiob-${answerNumber}`).style.backgroundColor = '#76FF03';
        document.querySelector(`#radiob-${userAnswer}`).style.backgroundColor = '#F44336';
      }
    } else {

    }
  }

  return (
    <div>
      <Row>
        <Col lg={12}>
          <div className="card">
            <CardHeader headerText={`Question ${props.currentProblem}: ${props.question}`} />
            <div className="card-body">
              <Row>
                <Col lg={6} id="radiob-0">
                  <div className="radio left-align">
                    <input className="radio-input" id="radio-0" name="radio" type="radio" />
                    <label htmlFor="radio-0" className="radio-label">{props.answers[0]}</label>
                  </div>
                </Col>
                <Col lg={6} id="radiob-1">
                  <div className="radio right-align">
                    <input className="radio-input" id="radio-1" name="radio" type="radio" />
                    <label htmlFor="radio-1" className="radio-label">{props.answers[1]}</label>
                  </div>
                </Col>
              </Row>
              <Row className="margin">
                <Col lg={6} id="radiob-2">
                  <div className="radio left-align">
                    <input className="radio-input" id="radio-2" name="radio" type="radio" />
                    <label htmlFor="radio-2" className="radio-label">{props.answers[2]}</label>
                  </div>
                </Col>
                <Col lg={6} id="radiob-3">
                  <div className="radio right-align">
                    <input className="radio-input" id="radio-3" name="radio" type="radio" />
                    <label htmlFor="radio-3" className="radio-label">{props.answers[3]}</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <button className="btn margin large-btn-font" onClick={submitAnswer}>Submit</button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TestCard;