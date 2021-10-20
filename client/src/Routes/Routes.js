import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";

import Tasks from "../components/Tasks";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/tasks" component={Tasks} />
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
