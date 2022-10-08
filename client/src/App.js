import React, { Fragment, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { toast } from "react-toastify";

//components

import Dashboard from "./auth_components/DashBoard";
import HomePage from "./auth_components/HomePage";

toast.configure();

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { 
          jwt_token: localStorage.token, },
      
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary">
      <Router>
        
          <Switch>
            <Route exact path="/" render={
              props => !isAuthenticated ?
              ( <HomePage {...props} setAuth={setAuth} /> ) : ( <Redirect to="/dashboard" />) }
            />
            <Route exac path="/dashboard" render={
              props => isAuthenticated ? 
              ( <Dashboard {...props} setAuth={setAuth} />) : ( <Redirect to="/" />) }
            />
          </Switch>
     
      </Router>
      </div>
    </Fragment>
  );
}

export default App;