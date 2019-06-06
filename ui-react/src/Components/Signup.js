import React, { Component } from "react";
import "./css/sign.css";
import { Link } from "react-router-dom";

class Signup extends Component {
  onSubmitInput = event => {
    event.preventDefault();
  };
  render() {
    return (
      <section id="signup">
        <h2>Sign up</h2>
        <div className="body-in">
          <form onSubmit={this.onSubmitInput}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input"
              />
            </div>
            <div>
              <input
                type="password"
                name="password1"
                placeholder="Password"
                className="input"
              />
            </div>
            <div>
              <input
                type="password"
                name="password2"
                placeholder="Password (repeat)"
                className="input"
              />
            </div>
            <br />
            <div>
              <label class="container">
                Driver
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark" />
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label class="container">
                Rider
                <input type="radio" name="radio" />
                <span class="checkmark" />
              </label>
            </div>
            <br />
            <Link to="/driver">
              <button type="submit" className="submit">
                Sign up
              </button>
            </Link>
            <p className="backtoLogin">
              Have an account? &nbsp;
              <Link to="/login" className="login">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </section>
    );
  }
}

export default Signup;
