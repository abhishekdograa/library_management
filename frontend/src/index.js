
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Mentors from "views/index-sections/Mentors"
import Projects from "views/index-sections/Projects";
import Instruments from "views/index-sections/Instruments";
import Login from "views/index-sections/Login"
import Cart from "views/index-sections/Cart"
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/mentors"
        render={props => <Mentors {...props} />}
      />
      <Route
        path="/projects"
        render={props => <Projects {...props} />}
      />
      <Route
        path="/instruments"
        
        render={props => <Instruments {...props} />}
      />
      <Route
        path="/login"
        
        render={props => <Login {...props} />}
      />
       <Route
        path="/Cart"
        
        render={props => <Cart {...props} />}
      />
      {/* <Route
        path="/instruments"
        
        render={props => <Instruments {...props} />}
      /> */}
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
