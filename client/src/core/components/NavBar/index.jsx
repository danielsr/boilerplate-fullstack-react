import React, { Component } from 'react'
import {
  Collapse,
  Navbar as Navbar_,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderItems() {
    const { items } = this.props
    if (!items) return null
    return items.map((item, index) => (
      <NavItem key={index}>
        <Link className="nav-link" to={item.link}>
          {item.text}
        </Link>
      </NavItem>
    ))
  }

  render() {
    const { title } = this.props
    return (
      <Navbar_ className="navbar-dark bg-dark" expand="md" fixed="top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>{this.renderItems()}</Nav>
          </Collapse>
        </div>
      </Navbar_>
    )
  }
}

export default NavBar
