import React,{ Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LoginForm from '../container/LoginForm';
import Registration from '../auth/Registration';

export default class Login extends Component {

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-4">
            <LoginForm />
            <Registration />
        </Row>
      </Container>
    );
  }
}

