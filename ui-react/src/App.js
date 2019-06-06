import React from "react";
import Index from "./Home/Index";
import Driver from "./Components/Driver";
import Rider from "./Components/Rider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Create from "./Components/Create";
import Header from "./Components/Header";
import Join from "./Components/Join";
import JoinRide from "./Components/JoinRide";
import Login from "./Components/Login";
import Offer from "./Components/Offer";
import Req from "./Components/Req";
import Signup from "./Components/Signup";
import View from "./Components/View";
import ViewRides from "./Components/ViewRides";
import RideReq from "./Components/RideReq";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/create" component={Create} />
        <Route path="/driver" component={Driver} />
        <Route path="/header" component={Header} />
        <Route path="/join" component={Join} />
        <Route path="/joinRide" component={JoinRide} />
        <Route path="/login" component={Login} />
        <Route path="/offer" component={Offer} />
        <Route path="/req" component={Req} />
        <Route path="/rider" component={Rider} />
        <Route path="/signup" component={Signup} />
        <Route path="/view" component={View} />
        <Route path="/viewRides" component={ViewRides} />
        <Route path="/ride" component={RideReq} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
