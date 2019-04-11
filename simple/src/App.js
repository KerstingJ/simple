import React, { useState }from 'react';
import { Route } from 'react-router-dom';

import Login from './views/Login.js'
import Calender from './views/Calender.js'
import Contacts from './views/Contacts.js'
import Invoices from './views/Invoices.js'
import Client from './views/Client.js'
import Project from './views/Project.js'

import { clients as c } from './models/dummy-data'; // this needs to be replaced by a database call


export default function(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [clients, setClients] = useState(c)
  const [projects, setProjects] = useState([])

  const toggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="app">
      <Route exact path="/" render={() => <Calender {...props} />} />
      <Route path="/login" render={() => <Login {...props} login={toggleIsLoggedIn} />} />
      <Route path="/contacts" render={() => <Contacts {...props} clients={clients}/>} />
      <Route path="/invoices" render={() => <Invoices {...props} />} />
      <Route path="/client/:clientId" render={() => <Client {...props} />} />
      <Route path="/project/:projectId" render={() => <Project {...props} />} />
    </div>
  )
}
