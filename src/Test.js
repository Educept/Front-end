import React, { Component } from 'react';
import { Container } from 'react-grid-system'
import { withRouter } from 'react-router-dom'

import openSocket from 'socket.io-client';

import TestCard from './TestCard';
import $ from 'jquery';
import shuffle from 'shuffle-array'

import './Test.css';

const socket = openSocket('http://10.33.2.152:7000');

class Test extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      type: '',
      currentNum: 0,
      max: '',
      question: '',
      answers: [],
      correctAnswer: '',
      numberCorrect: 0,
    }
  }

  componentWillMount() {
    this.setState({type: this.props.type});
    this.setState({max: this.props.max}, this.nextQuestion());  
  }  

  nextQuestion() {
    if (this.state.currentNum > this.props.max) {
      this.props.history.push(`/test/results/${this.state.numberCorrect}/${this.state.max}`);
    } else {
      if (this.props.type === 'derivates') {
        $.get('http://10.33.2.152:3000/api/getQuestion', (data, status) => {}); 
      } else if (this.state.type === 'algebra') {
        $.get('http://10.33.2.152:3000/api/getQuestion3', (data, status) => {}); 
      } else {
        $.get('http://10.33.2.152:3000/api/getQuestion2', (data, status) => {}); 
      }

      socket.on('clientQ', (data) => {
        console.log(data);  
        this.setState({question: data[0]});
        this.setState({correctAnswer: data[1]});
        let answers = [data[1], data[2], data[3], data[4]];
        answers = shuffle(answers);
        this.setState({answers});
        this.setState({currentNum: this.state.currentNum + 1});
      })
    }
  }

  getAnswerIndex() {
    for (let i = 0; i < 4; i++) {
      if (this.state.answers[i] === this.state.correctAnswer) {
        return i;
      }
    }
    return -1;
  }

  checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
      this.setState({numberCorrect: this.state.numberCorrect + 1});
      return true;
    }
    return false;
  }

  render() {

    return (
      <div>
        <Container>
          <TestCard question={this.state.question}
                    nextQuestion={this.nextQuestion.bind(this)}
                    answers={this.state.answers}
                    currentProblem={this.state.currentNum}
                    getAnswerIndex={this.getAnswerIndex.bind(this)}
                    checkAnswer={this.checkAnswer.bind(this)}
                    />
        </Container>
      </div>
    );
  }
}

export default withRouter(Test);