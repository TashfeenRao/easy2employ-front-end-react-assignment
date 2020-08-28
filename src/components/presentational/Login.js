import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LoginForm from "../container/LoginForm";
import Registration from "../auth/Registration";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessFull = this.handleSuccessFull.bind(this)
  }

  handleSuccessFull(data) {
    this.props.history.push("/userView")
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-4">
          <h1>Status: {this.props.loggedStatus}</h1>
          <LoginForm />
          <Registration  handleSuccessFull={this.handleSuccessFull} />
        </Row>
      </Container>
    );
  }
}
