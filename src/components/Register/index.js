import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Collapse,
  Button,
  CardBody,
  Card
} from 'reactstrap'

import ClientRegister from './ClientRegister'

class Register extends Component {
  constructor (props) {
    super(props)
    this.toggleClient = this.toggleClient.bind(this)
    this.togglePT = this.togglePT.bind(this)
    this.state = {
      collapseClient: false,
      collapsePT: false
    }
  }

  toggleClient () {
    this.setState({ collapseClient: !this.state.collapseClient })
    this.setState({ collapsePT: false })
  }

  togglePT () {
    this.setState({ collapsePT: !this.state.collapsePT })
    this.setState({ collapseClient: false })
  }

  render () {
    return (
      <div>
        <Button
          color='primary'
          onClick={this.toggleClient}
          style={{ marginBottom: '1rem' }}
        >Client</Button>
        <Button
          color='primary'
          onClick={this.togglePT}
          style={{ marginBottom: '1rem' }}
        >PT</Button>
        <Collapse isOpen={this.state.collapseClient}>
          <ClientRegister />
        </Collapse>
        <Collapse isOpen={this.state.collapsePT}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}

export default connect(state => state)(Register)
