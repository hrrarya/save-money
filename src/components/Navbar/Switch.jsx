import React from "react";
import { Switch, Route } from "react-router-dom";

const Switch = props => {
  return (
    <Switch>
      <Route path="/" component={props.Dashboard} />
    </Switch>
  );
};

export default Switch;
