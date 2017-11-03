import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormGroup } from 'reactstrap'

import validateUser from './validateUser'

class ClientRegister extends Component {
  handleSubmit () {
    const username = this.refs.username.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    const passwordConfirm = this.refs.passwordConfirm.value

    validateUser({ username, email, password, passwordConfirm }, (err, res) => {
      console.log(err)
      console.log(res)
    })
  }

  render () {
    return (
      <Form>
        <FormGroup>
          <input type='text' name='username' id='username' ref='username' placeholder='Name' />
        </FormGroup>
        <FormGroup>
          <input type='email' name='email' id='email' ref='email' placeholder='Email Address' />
        </FormGroup>
        <FormGroup>
          <input type='password' name='password' id='password' ref='password' placeholder='Password' />
        </FormGroup>
        <FormGroup>
          <input type='password' name='passwordConfirm' id='passwordConfirm' ref='passwordConfirm' placeholder='Confirm Password' />
        </FormGroup>
        <Button onClick={() => this.handleSubmit(this.refs.email)} >Register</Button>
      </Form>
    )
  }
}

export default connect(state => state)(ClientRegister)
