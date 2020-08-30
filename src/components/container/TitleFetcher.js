import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class TitleFetcher extends Component {
    constructor() {
        super();


    }
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>URL for Website</Form.Label>
            <Form.Control
              type="inputurl"
              name="url"
              placeholder="Enter website urls"
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
