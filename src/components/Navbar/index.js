import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends Component {
  render () {
    return (
      <div>
        hello navbar
      </div>
    )
  }
}

export default connect(state => state)(Navbar)
