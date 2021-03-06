import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      registrationError: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password, passwordConfirmation } = this.state;
    axios
      .post(
        "https://the-back-end-auth-api.herokuapp.com/registrations",
        {
          user: {
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if(response.data.status === "created") {
            this.props.handleSuccessFull(response.data)
            localStorage.setItem("loginStatus", true)
        }
      })
      .catch((error) => {
        console.log("register error", error);
        localStorage.setItem("loginStatus", false)
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password confirm</Form.Label>
            <Form.Control
              type="password"
              name="passwordConfirmation"
              placeholder="Password"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}
