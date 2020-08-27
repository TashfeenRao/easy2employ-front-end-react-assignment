import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LoginForm from '../container/LoginForm';

function Login() {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
          <LoginForm />
      </Row>
    </Container>
  );
}

export default Login;
