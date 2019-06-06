import React from "react";
import { Switch, BrowserRouter, Route, NavLink } from "react-router-dom";
import StickyFooter from "react-sticky-footer";
import "./css/driver.css";
import View from "./View";
import Create from "./Create";
import RideReq from "./RideReq";
import Offer from "./Offer";

function Driver() {
  return (
    <div className="body2">
      <section id="header2">
        <BrowserRouter>
          <div>
            <div className="Links" id="links">
              <NavLink activeClassName="activeHash" to="/" className="brand2">
                <font size="6">Ride My Way</font>
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/create"
                className="link2"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/offer"
                className="link2"
              >
                Offer a ride
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/view"
                className="link2"
              >
                View ride offers
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/ride"
                className="link2"
              >
                Ride offer requests
              </NavLink>
              <NavLink activeClassName="activeHash" to="/" className="link2">
                Sign out
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Create} />
            <Route path="/create" component={Create} />
            <Route path="/offer" component={Offer} />
            <Route path="/view" component={View} />
            <Route path="/ride" component={RideReq} />
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
        <div className="footer">Copyright &copy; 2019 Ride My Way</div>
      </StickyFooter>
    </div>
  );
}

export default Driver;
