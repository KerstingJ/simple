import React from 'react';
import { Route } from 'react-router-dom';

import Login from './views/Login.js'
import Calender from './views/Calender.js'
import Contacts from './views/Login.js'
import Invoices from './views/Invoices.js'
import Client from './views/Client.js'
import Project from './views/Project.js'



export default function(props){

  return(
    <div className="app">
      <Route exact path="/" render={() => <Calender />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/contacts" render={() => <Contacts />} />
      <Route path="/invoices" render={() => <Invoices />} />
      <Route path="/client/:clientId" render={() => <Client />} />
      <Route path="/project/:projectId" render={() => <Project />} />
    </div>
  )
}
