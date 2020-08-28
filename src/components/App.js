import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/presentational/Login';
import UserView from '../components/presentational/UserView';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "not_logged_in",
      user: {}
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route 
          exact 
          path="/" 
          render={props => (
            <Login {... props} loggedStatus={this.state.loggedInStatus}/>
          )} />
          <Route 
          exact 
          path="/userView" 
          render={props => (
            <UserView {... props} loggedStatus={this.state.loggedInStatus} />
          )} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

