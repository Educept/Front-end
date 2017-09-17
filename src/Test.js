import React, { Component } from 'react';
import { Container } from 'react-grid-system'

import TestCard from './TestCard';
import $ from 'jquery'

import './Test.css';

class Test extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      type: '',
      max: '',
      question: '',
      answers: [],
      correctAnswer: '',
    }
  }

  componentWillMount() {
    this.setState({type: this.props.type});
    this.setState({max: this.props.max});  

    this.nextQuestion();
  }  

  nextQuestion() {
    $.get('http://10.33.2.152:3000/api/getQuestion', (data, status) => {
      
    }); 
  }

  render() {
    const props = {...this.state};

    return (
      <div>
        <Container>
          <TestCard quesionData={props} nextQuestion={this.nextQuestion.bind(this)}/>
        </Container>
      </div>
    );
  }
}

export default Test;