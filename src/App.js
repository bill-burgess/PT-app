import React, { Component } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.css'
import { Route } from 'react-router'

import Home from './components/Home'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Route exact path='/' component={Home} />
      </div>
    )
  }
}

export default App
