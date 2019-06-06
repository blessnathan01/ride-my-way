import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "../font.css";
import "./driver.css";

function Nav() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" className="brand">
            Ride My Way
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Nav;
