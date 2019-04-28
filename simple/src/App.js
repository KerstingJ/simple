import React from 'react';
import {Route} from 'react-router-dom';

import PrivateRoute from './components/PrivateRouter';

import Login from './views/Login';
import MainView from './views/MainView.js';
import ProjectView from './views/ProjectView.js';
import ContractorView from './views/ContractorView.js';
import MarketingPage from './views/MarketingPage';

export default function(props){
  return (
    <div className="App">
      {/* <Route path="/login" component={Login}/>
      <Route path="/register" component={Login} register={true}/> */}
      <Route exact path="/" component={MarketingPage} />
      <Route exact path="/projects" component={MainView} />
      <Route path="/projects/:id" component={ProjectView} />
      <Route path="/contractors/:id" component={ContractorView} />
      <Route path="/addProject" component={MainView} />
    </div>
  );
}
