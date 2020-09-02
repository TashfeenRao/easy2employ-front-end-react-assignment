import React, { Component } from "react";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import axios from "axios";
import Login from "../components/presentational/Login";
import UserView from "../components/presentational/UserView";
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "not_logged_in",
      user: {},
    };
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.loggedStatus = this.loggedStatus.bind(this);
  }
  componentDidMount() {
    this.loggedStatus();
/*     const getStatus = localStorage.getItem("loginStatus");
    if (getStatus && this.state.loggedInStatus === "not_logged_in") {
      this.setState({
        loggedInStatus: "Logged_In",
      });
    } else if (!getStatus && this.state.loggedInStatus === "Logged_In") {
      this.setState({
        loggedInStatus: "not_logged_in",
      });
    } */
  }

  handleLoggedIn(data) {
    this.setState({
      loggedInStatus: "Logged_In",
      user: data.user,
    });
  }
  loggedStatus() {
    axios
      .get("https://the-back-end-auth-api.herokuapp.com/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "not_logged_in"
        ) {
          this.setState({
            loggedInStatus: "Logged_In",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "Logged_In"
        ) {
          this.setState({
            loggedInStatus: "not_logged_in",
          });
        }
      })
      .catch((error) => {
        console.log("loggedStatus error", error);
      });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Login
                  {...props}
                  handleLoggedIn={this.handleLoggedIn}
                  loggedStatus={this.state.loggedInStatus}
                />
              )}
            />
              <Route
                exact
                path="/userView"
                render={(props) => (
                  <UserView
                    {...props}
                    loggedStatus={this.state.loggedInStatus}
                  />
                )}
              />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
