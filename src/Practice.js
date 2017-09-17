import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Select from 'react-select';
import { Route, Link } from 'react-router-dom'

import CardHeader from './CardHeader';
import Test from './Test'

import './Practice.css'
import 'react-select/dist/react-select.css';

class Practice extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      subject: '',
      numOfQuestions: 0,
      options: [
        { value: 'algebra', label: 'Algebra' },
        { value: 'derivates', label: 'Derivates' },
        { value: 'integrals', label: 'Integrals' }
      ],
      numOptions: [
      ]
    }
  }

  
  componentWillMount() {
    let numOptionsArray = [];
    for (let i = 1; i <= 10; i++) {
      const obj = {
        value: i,
        label: i
      }
      numOptionsArray[i - 1] = obj;
    }
    this.setState({numOptions: numOptionsArray}, () => {console.log(this.state.numOptions)}); 
  }
  

  subjectChange(value) {
    this.setState({subject: value});
  }

  numberChange(value) {
    this.setState({numOfQuestions: value});
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="card">
                <CardHeader headerText="Practice Settings" />
                <Row id="selector-row">
                    <Col lg={5} className="inline">
                      <label>Subject:</label>
                      <Select
                        name="subjectSelection"
                        value={this.state.subject}
                        options={this.state.options}
                        onChange={this.subjectChange.bind(this)}
                        className="selector"
                      />
                    </Col>
                    <Col lg={5} className="inlineLeft">
                      <label>Number of questions: </label>
                      <Select
                        name="subjectSelection"
                        value={this.state.numOfQuestions}
                        options={this.state.numOptions}
                        onChange={this.numberChange.bind(this)}
                        className="numSelector"
                      />
                    </Col>
                    <Col lg={2}>
                      <Link to={`/test/practice/${this.props.uid}/${this.state.subject.value}/${this.state.numOfQuestions.value}`}><button className="btn inlineLeft" type="submit">Submit</button></Link>
                    </Col>
                </Row>
              </div>
            </Col>
          </Row>  
        </Container>
      </div>
    );
  }
}

export default Practice;