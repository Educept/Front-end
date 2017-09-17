import React, { Component } from 'react';
import { Container } from 'react-grid-system'

import openSocket from 'socket.io-client';

import TestCard from './TestCard';
import $ from 'jquery'

import './Test.css';

const socket = openSocket('http://10.33.2.152:7000');

class Test extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      type: '',
      currentNum: 1,
      max: '',
      question: 'f(x) = 5 * x',
      answers: [5553234, 10, 15, 20],
      correctAnswer: '5',
    }
  }

  componentWillMount() {
    this.setState({type: this.props.type});
    this.setState({max: this.props.max});  

    this.nextQuestion();
  }  

  nextQuestion() {
    $.get('http://10.33.2.152:3000/api/getQuestion', (data, status) => {
      console.log(data);
    }); 
  }

  checkAnswer() {

  }

  render() {
    socket.on('clientQ', function(data){
      console.log(data);
    })

    return (
      <div>
        <Container>
          <TestCard question={this.state.question}
                    nextQuestion={this.nextQuestion.bind(this)}
                    answers={this.state.answers}
                    currentProblem={this.state.currentNum}
                    checkAnswer={this.checkAnswer}
                    />
        </Container>
      </div>
    );
  }
}

export default Test;