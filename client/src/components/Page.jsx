import React, { Component } from 'react'

class Page extends Component {
  render() {
    return (
      <div className="container page">
        <h1>{this.props.title}</h1>
        <hr />
        {this.props.children}
      </div>
    )
  }
}

export default Page
