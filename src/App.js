import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/LogoutButton";
import Profile from "./pages/Profile";

import Register from "./pages/Register";

export default function BasicExample() {
  return (
    <Router>
      <>
        <Switch>

          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/profil" component={Profile} />

        </Switch>
      </>
    </Router>
  );
}
