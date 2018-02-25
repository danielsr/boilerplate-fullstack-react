import React, { Component } from 'react'
import { Route } from 'react-router'
import Footer from './Footer'
import Header from './Header'

class Main extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Main
