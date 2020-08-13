import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Landing from "./pages/Landing/index";
import LoginAluno from "./pages/User-Login/index";
import ClassForm from "./pages/Class-form/index";
import UserRegister from "./pages/User-register/index";
import TeacherList from "./pages/Teacher-list/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/user/login" component={LoginAluno} />
        <Route path="/user/register" component={UserRegister} />
        <Route path="/teacher-list" component={TeacherList} />

        <Route path="/class-register" component={ClassForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
