import React from "react";

import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from "../components/Routes"


const app = document.getElementById('app');
render(
  <Router routes={Routes} history={browserHistory}/>,
  app);

