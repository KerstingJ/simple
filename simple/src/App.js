import React, { useState }from 'react';
import { Route } from 'react-router-dom';

import Login from './views/Login.js'
import Calender from './views/Calender.js'
import Contacts from './views/Contacts.js'
import Invoices from './views/Invoices.js'
import Client from './views/Client.js'
import Project from './views/Project.js'

import Header from './components/Header.js'



export default function(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [clients, setClients] = useState([])
  const [projects, setProjects] = useState([])

  const toggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="app">
      <Route exact path="/" render={() => <Calender {...props} />} />
      <Route path="/login" render={() => <Login {...props} login={toggleIsLoggedIn} />} />
      <Route path="/contacts" render={() => <Contacts {...props} />} />
      <Route path="/invoices" render={() => <Invoices {...props} />} />
      <Route path="/client/:clientId" render={() => <Client {...props} />} />
      <Route path="/project/:projectId" render={() => <Project {...props} />} />
    </div>
  )
}
