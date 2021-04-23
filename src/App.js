import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";

import UpdateProfile from "./features/users/UpdateProfile"
import UserProfile  from "./features/users/UserProfile";
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import { UserList } from "./features/users/UserList";
import {LoginPage } from './features/LoginPage';


export default function App() {
  return (
  
    <Router>
      <div>
        <Switch>
        <Route path="/update-profile">
            <UpdateProfile />
          </Route>
        <Route path="/user-profile">
            <UserProfile />
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
