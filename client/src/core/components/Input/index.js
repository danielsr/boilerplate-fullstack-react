import React, { Component } from 'react'
import { Field } from 'redux-form'

class Input extends Component {
  input = ({ input, meta: { touched, error } }) => (
    <div className="form-group">
      <label>{this.props.label}</label>
      <input {...input} className="form-control" placeholder={this.props.placeholder} />
      <small className="form-text text-danger">{touched && error}</small>
    </div>
  )

  render() {
    return <Field name={this.props.name} component={this.input} validate={this.props.validate} />
  }
}

export default Input
