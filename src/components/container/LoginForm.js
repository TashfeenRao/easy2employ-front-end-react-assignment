import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      registrationError: [],
      loading: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true
    })
    const { username, password } = this.state;
    axios
      .post(
        "https://the-back-end-auth-api.herokuapp.com/sessions",
        {
          user: {
            username: username,
            password: password,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if(response.data.logged_in) {
            this.props.handleSuccessFull(response.data)
            localStorage.setItem("loginStatus", true)
            console.log("successs")
            this.setState({
              loading: false
            })
        }
      })
      .catch((error) => {
        this.setState({
          loading: false
        })
        this.setState({
          registrationError: error
        })
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
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {this.state.loading &&  <h3>Signning you wait...</h3> }
      </div>
    )
  }
}

