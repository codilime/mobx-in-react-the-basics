import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { CodiLayout } from "../common/codi-layout/CodiLayout";
import styles from "./app.module.scss";

const Demo01 = lazy(() => import("../demo01/Demo01"));
const Demo02 = lazy(() => import("../demo02/Demo02"));
const Demo03 = lazy(() => import("../demo03/Demo03"));
const Demo04 = lazy(() => import("../demo04/Demo04"));
const Demo05 = lazy(() => import("../demo05/Demo05"));
const Demo06 = lazy(() => import("../demo06/Demo06"));

export const App = () => {
  return (
    <Router>
      <CodiLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/demo01" component={Demo01} />
            <Route exact path="/demo02" component={Demo02} />
            <Route exact path="/demo03" component={Demo03} />
            <Route exact path="/demo04" component={Demo04} />
            <Route exact path="/demo05" component={Demo05} />
            <Route exact path="/demo06" component={Demo06} />
            <Route path="*">
              <section className={styles.App__Section}>
                <h3>How MobX works?</h3>
                <ul className={styles.App__Links}>
                  <li>
                    <Link to="/demo01">
                      Demo 01 - observable(...) and autorun(...)
                    </Link>
                  </li>
                  <li>
                    <Link to="/demo02">
                      Demo 02 - make(Auto)Observable(...)
                    </Link>
                  </li>
                  <li>
                    <Link to="/demo03">Demo 03 - Observable state</Link>
                  </li>
                  <li>
                    <Link to="/demo04">Demo 04 - Arrays</Link>
                  </li>
                  <li>
                    <Link to="/demo05">Demo 05 - Asynchronous actions</Link>
                  </li>
                </ul>
                <h3>How to integrate with React?</h3>
                <ul className={styles.App__Links}>
                  <li>
                    <Link to="/demo06">Demo 06 - React Integration</Link>
                  </li>
                </ul>
              </section>
            </Route>
          </Switch>
        </Suspense>
      </CodiLayout>
    </Router>
  );
};
