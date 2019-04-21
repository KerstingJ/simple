import React from 'react';
import {Route} from 'react-router-dom';

import PrivateRoute from './components/PrivateRouter'

import Login from './views/Login'
import MainView from './views/MainView.js'
import ProjectView from './views/ProjectView.js'

export default function(props){
  return (
    <div className="App">
      {/* <Route path="/login" component={Login}/>
      <Route path="/register" component={Login} register={true}/> */}
      <Route exact path="/" component={MainView} />
      <Route path="/project/:id" component={ProjectView} />
      <Route path="/addProject" component={MainView} />
    </div>
  );
}
