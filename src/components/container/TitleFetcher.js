import React, { Component } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class TitleFetcher extends Component {
    constructor() {
        super();

        this.state = {
            title: ''
        }

        this.handleTitleForm = this.handleTitleForm.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
    }

    handleTitleForm(event) {
        event.preventDefault()
    }

    handleTitleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleTitleForm}>
          <Form.Group>
            <Form.Label>URL for Website</Form.Label>
            <Form.Control
              type="inputurl"
              as="textarea"
              name="title"
              placeholder="Enter website urls"
              onChange={this.handleTitleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Get Titles
          </Button>
        </Form>
      </div>
    );
  }
}
