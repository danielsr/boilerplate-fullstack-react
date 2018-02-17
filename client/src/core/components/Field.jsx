import React, { Component } from 'react'
import { Field as ReduxFormField } from 'redux-form'

class Field extends Component {
  input = ({ input, meta: { touched, error } }) => (
    <div className="form-group">
      <label>{this.props.label}</label>
      <input {...input} className="form-control" placeholder={this.props.placeholder} />
      <small className="form-text text-danger">{touched && error}</small>
    </div>

  );

  render() {
    return (
      <ReduxFormField
        name={this.props.name}
        component={this.input}
        validate={this.props.validate}
      />
    )
  }
}

export default Field
