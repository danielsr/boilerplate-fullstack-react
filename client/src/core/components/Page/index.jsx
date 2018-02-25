import React, { Component } from 'react'

class Page extends Component {
  render() {
    const { title, children } = this.props
    return (
      <div className="container page">
        <h1>{title}</h1>
        <hr />
        {children}
      </div>
    )
  }
}

export default Page
