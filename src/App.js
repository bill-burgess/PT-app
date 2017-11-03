import React, { Component } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.css'
import { Route } from 'react-router'

import Home from './components/Home'
import Register from './components/Register'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
      </div>
    )
  }
}

export default App
