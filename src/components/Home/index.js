import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}

export default connect(state => state)(Home)
