import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Landscape</title>
        <meta name="description" content="Best landscapes" />
        <meta name="keywords" content="landscapte" />
      </Helmet>

      <Switch>
        <Route exact path={"/"} component={Home} />
        {/* <Route exact path="/add" component={AddTutorial} />
        <Route path="/tutorials/:id" component={Tutorial} /> */}
      </Switch>
    </Router>
  );
};

export default App;
