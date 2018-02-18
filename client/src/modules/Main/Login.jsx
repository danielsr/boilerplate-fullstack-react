import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Modal, Input } from 'core/components'

class Login extends Component {
  render() {
    return (
      <Modal title="Login">
        <div className="row">
          <div className="col-md">
            <Input name="email" label="E-mail" />
            <Input name="pwd" label="Senha" />
          </div>
        </div>
      </Modal>
    )
  }
}

export default reduxForm({ form: 'login' })(Login)
