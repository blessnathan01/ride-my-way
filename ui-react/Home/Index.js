import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import "./style.css";
import "../fonts.css";
import "../script";

function Index() {
  return (
    <div className="body">
      <section id="header">
        <BrowserRouter>
          <Switch>
            <Route>
              <div>
                <div className="Links" id="links">
                  <HashLink smooth to="/#header" className="hashbrand">
                    <font size="6">Ride My Way</font>
                  </HashLink>
                  <HashLink smooth to="/#header" exact className="hashlink">
                    Home
                  </HashLink>
                  <HashLink smooth to="/#about" className="hashlink">
                    About us
                  </HashLink>
                  <HashLink smooth to="/#login" className="hashlink">
                    Log in
                  </HashLink>
                  <HashLink smooth to="/#signup" className="hashlink">
                    Sign up
                  </HashLink>
                </div>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
        <div className="header">
          <br />
          <p id="offer" />
        </div>
      </section>

      <section id="about">
        <h2>About us</h2>
        <p class="team">
          We are a tech enthusiast team that provides drivers with the ability
          to create ride offers and passengers to join available ride offers
          through a new Ride My Way app.
        </p>
      </section>

      <section id="login">
        <h2>Log in</h2>
        <BrowserRouter>
          <Switch>
            <Route>
              <Link to="/" className="button driver">
                As a driver
              </Link>
            </Route>
          </Switch>
        </BrowserRouter>

        <BrowserRouter>
          <Switch>
            <Route>
              <Link to="/" className="button rider">
                As a rider
              </Link>
            </Route>
          </Switch>
        </BrowserRouter>
      </section>

      <section id="signup">
        <h2>Sign up</h2>
        <BrowserRouter>
          <Switch>
            <Route>
              <Link to="/" className="button drivers">
                As a rider
              </Link>
            </Route>
          </Switch>
        </BrowserRouter>

        <BrowserRouter>
          <Switch>
            <Route>
              <Link to="/" className="button riders">
                As a rider
              </Link>
            </Route>
          </Switch>
        </BrowserRouter>
      </section>

      <footer>
        <div class="footer">Copyright &copy; 2019 Ride My Way</div>
      </footer>
    </div>
  );
}

export default Index;
