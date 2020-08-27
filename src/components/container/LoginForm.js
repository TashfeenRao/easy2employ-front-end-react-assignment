import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginForm() {
    return (
        <div>
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
        </div>
    )
}

export default LoginForm
