import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Listing from './pages/Listing';
import RegisterList from './pages/RegisterList';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Listing}/>
      <Route path="/register" component={RegisterList}/>
    </BrowserRouter>
  );
}

export default Routes;