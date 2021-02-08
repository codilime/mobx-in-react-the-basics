import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Demo01 = lazy(() => import("../demo01/Demo01"));
const Demo02 = lazy(() => import("../demo02/Demo02"));
const Demo03 = lazy(() => import("../demo03/Demo03"));
const Demo04 = lazy(() => import("../demo04/Demo04"));

export const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/demo01" component={Demo01} />
            <Route exact path="/demo02" component={Demo02} />
            <Route exact path="/demo03" component={Demo03} />
            <Route exact path="/demo04" component={Demo04} />
            <Route path="*">
              <ul>
                <li>
                  <Link to="/demo01">
                    Demo 01 - observer(...) and autorun(...)
                  </Link>
                </li>
                <li>
                  <Link to="/demo02">Demo 02 - make(Auto)Observable(...)</Link>
                </li>
                <li>
                  <Link to="/demo03">Demo 03 - Observable state</Link>
                </li>
                <li>
                  <Link to="/demo04">Demo 04 - Arrays</Link>
                </li>
              </ul>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};
