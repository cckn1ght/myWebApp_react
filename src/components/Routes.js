import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from "./Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Exam from "../pages/Exam";

module.exports = (
      <Route path='/' component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='home' component={Home}></Route>
        <Route path='login' component={Login}></Route>
        <Route path='exam' component={Exam}></Route>
      </Route>
)
