import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <Container>
      <Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="email" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
