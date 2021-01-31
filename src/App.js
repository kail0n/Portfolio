import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header, Footer } from './layout'
import { About, Home, Projects } from './pages'

import './style.css'

class App extends React.Component {
    render() {
      return (
        <>
          <Header/>
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
            </Switch>
          </main>
          {/* <Footer/> */}
        </>
      )
    }
  }

export default App