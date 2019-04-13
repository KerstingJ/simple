import React, { useState }from 'react';
import { Route } from 'react-router-dom';

import Login from './views/Login.js'
import Calender from './views/Calender.js'
import Contacts from './views/Contacts.js'
import Invoices from './views/Invoices.js'
import Client from './views/Client.js'
import Project from './views/Project.js'


export default function(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="app">
      <Route exact path="/" component={Calender} />
      <Route path="/login" render={() => <Login {...props} login={toggleIsLoggedIn} />} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/invoices" component={Invoices} />
      <Route path="/client/:clientId" component={Client} />
      <Route path="/project/:projectId" component={Project} />
    </div>
  )
}
