import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system'

import CardHeader from './CardHeader'
import './Sites.css'
import $ from 'jquery'

class Site extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sites: [

      ],
      index: 0,
    }
  }

  handleSubmit() {
    const text = document.querySelector('#site').value;

    let index = this.state.index;
    let sites = [...this.state.sites];
    sites[index] = text;

    this.setState({sites});

    index++;
    this.setState({index});

    document.querySelector('#site').value = "";

    $.ajax({
      type: "POST",
      url: 'http://10.33.2.152:3000/api/makeitwhateveryouwant',
      data: sites,
      success: () => {
        console.log(this.state.sites);
      }
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="card">
                <CardHeader headerText="Enter Sites to be Tested" />
                <Row>
                  <div className="body-container">              
                    <Col offset={{lg: 1}} lg={8}>
                      <div className="group">
                        <input type="text" placeholder="Site" id="site"/>
                        <label htmlFor="site">Site</label>
                      </div>
                    </Col>
                    <Col lg={3}>
                      <button className="btn btn-margin" onClick={this.handleSubmit.bind(this)}>Submit</button>
                    </Col>
                  </div>
                </Row>
                <Row>
                  <ul>
                    <li>{this.state.sites.forEach((site) => {return site;})}</li>
                  </ul>

                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Site;