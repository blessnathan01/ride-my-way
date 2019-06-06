import React from "react";
import { Switch, BrowserRouter, Route, NavLink } from "react-router-dom";
import StickyFooter from "react-sticky-footer";
import "./css/rider.css";
import "./css/fonts.css";
import JoinRide from "./JoinRide";
import Join from "./Join";
import Req from "./Req";
import ViewRides from "./ViewRides";

function Rider() {
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
                to="/join"
                className="link2"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/joinRide"
                className="link2"
              >
                Join a ride offer
              </NavLink>
              <NavLink
                activeClassName="activeHash"
                to="/viewRides"
                className="link2"
              >
                View ride offers
              </NavLink>
              <NavLink activeClassName="activeHash" to="/req" className="link2">
                Ride offer requests
              </NavLink>
              <NavLink activeClassName="activeHash" to="/" className="link2">
                Sign out
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Join} />
            <Route path="/join" component={Join} />
            <Route path="/joinRide" component={JoinRide} />
            <Route path="/viewRides" component={ViewRides} />
            <Route path="/req" component={Req} />
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

export default Rider;
