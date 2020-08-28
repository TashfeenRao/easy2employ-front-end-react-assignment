import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/presentational/Login';
import UserView from '../components/presentational/UserView';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/userView" component={UserView} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

