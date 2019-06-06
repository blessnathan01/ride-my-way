import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./driver.css";
import "../fonts.css";
import Index from "../Home/Index";
import Credential from "./Credential";
import Nav from "./Nav";

class AsDriver extends Component {
  state = {
    credentials: [
      {
        username: "Blessing",
        password: "1234"
      }
    ]
  };

  onSubmitTask = event => {
    event.preventDefault();

    const credential = {
      username: event.target[0].value,
      password: event.target[1].value
    };

    const credentialList = [credential].concat(this.state.credentials);

    this.setState({ credentials: credentialList });
  };

  onComplete = index => {
    console.log(index);
    const updateCredentials = [].concat(this.state.credentials);
    updateCredentials[index].isComplete = true;

    this.setState({ credentials: updateCredentials });
  };

  render() {
    return (
      <div className="body-in">
        {/* <Nav />
        <nav>
          <BrowserRouter>
            <Switch>
              <Route exact path="/../Home/Index">
                <font size="6">Ride My Way</font>
              </Route>
            </Switch>
          </BrowserRouter>
        </nav> */}
        {/* form */}
        <form onSubmit={this.onSubmitTask}>
          <div>
            <input type="text" name="username" />
          </div>
          <div>
            <input type="password" name="password" />
          </div>
          <button type="submit">Log in</button>
        </form>
        {/* end form */}
        {/* credential list */}
        {this.state.credentials.map((credential, index) => (
          <Credential
            index={index}
            description={credential.username}
            time={credential.password}
            onComplete={this.onComplete}
          />
        ))}
        {/* end credential list */}
      </div>
    );
  }
}

export default AsDriver;
