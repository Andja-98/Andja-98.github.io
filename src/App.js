import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";

import { ViewUser } from "./features/users/ViewUser";
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import { UserList } from "./features/users/UserList";
import {LoginPage } from './features/LoginPage';



export default function App() {
  return (
  
    <Router>
      <div>
        <Switch>
        <Route path="/view-user">
            <ViewUser />
          </Route>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/user-list">
            <UserList/>
          </Route> 
          <Route path="/">
            <LoginPage/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}
