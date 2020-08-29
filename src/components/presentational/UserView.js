import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UserView = (props) => {
  return (
    <div>
      <h1>Status: {props.loggedStatus}</h1>
      <h2>input for website urls</h2>
      <Form>
        <Form.Group>
          <Form.Label>Password</Form.Label>
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
};

export default UserView;
