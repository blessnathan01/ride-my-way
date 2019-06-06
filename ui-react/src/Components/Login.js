import React, { Component } from "react";
import "./css/sign.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    inputs: {
      username: "Baraka"
    }
  };
  handleSubmit = event => {
    event.preventDefault();

    const input = {
      username: event.target[0].value,
      password: event.target[1].value
    };

    // const allInputs = [this.state.inputs, input];

    this.setState({ inputs: input });
  };

  onChangeInput = event => {
    this.setState({ editedInput: event.target.value });
  };
  render() {
    return (
      <section id="login">
        <h2>Log in</h2>
        <div className="body-in">
          <form onSubmit={this.handleSubmit}>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input"
              onChange={this.onChangeInput}
              value={this.state.editedInput}
            />
            <br />
            <input
              type="password"
              name="password0"
              placeholder="Password"
              className="input"
            />
            <br />
            <br />
            <button type="submit" className="submit">
              Log in
            </button>
            <p className="backtoLogin">
              Do you have an account? &nbsp;
              <Link to="/signup" className="signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
