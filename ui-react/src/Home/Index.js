import React, { Component } from "react";
import { Switch, BrowserRouter, Route, NavLink } from "react-router-dom";
import Typist from "react-typist";
import StickyFooter from "react-sticky-footer";
import "./style.css";
import "../fonts.css";
import Header from "../Components/Header";
import About from "../Components/About";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

function Index() {
  return (
    <div className="body1">
      <section id="header">
        <BrowserRouter>
          <div>
            <div className="Links" id="links">
              <NavLink
                activeClassName="activeHash"
                to="/"
                className="hashbrand"
              >
                <font size="6">Ride My Way</font>
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/header"
                exact
                className="hashlink"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/about"
                className="hashlink"
              >
                About us
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/login"
                className="hashlink"
              >
                Log in
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/signup"
                className="hashlink"
              >
                Sign up
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/header" component={Header} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </section>

      <StickyFooter
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: "#000",
          padding: "2rem",
          color: "#f7751f"
        }}
      >
        <div>Copyright &copy; 2019 Ride My Way</div>
      </StickyFooter>
    </div>
  );
}

export default Index;
