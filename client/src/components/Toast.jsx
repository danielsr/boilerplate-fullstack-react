import React, { Component } from 'react'

class Toast extends Component {
  render() {
    if (!this.props.msg) return null
    return <div className="toast">{this.props.msg}</div>
  }
}

export default Toast
