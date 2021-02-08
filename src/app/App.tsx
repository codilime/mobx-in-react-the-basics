import "./App.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Demo01 } from "../demo01/Demo01";

export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/demo01" component={Demo01} />
          <Route path="*">
            <ul>
              <li>
                <Link to="/demo01">Demo 01 - observer() and autorun()</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
