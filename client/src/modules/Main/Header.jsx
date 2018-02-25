import React, { Component } from 'react'
import { NavBar } from 'core/components'

class Header extends Component {
  items = [{ link: '/todo', text: 'ToDo' }, { link: '/drop', text: 'Drag and Drop' }]

  render() {
    return <NavBar title="Boilerplate FullStack React" items={this.items} />
  }
}

export default Header
