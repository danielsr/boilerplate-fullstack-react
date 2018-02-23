import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-beautiful-dnd'

class DragDrop extends Component {
  render() {
    const { onDragEnd, children } = this.props
    return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
  }
}

DragDrop.propTypes = {
  onDragEnd: PropTypes.func,
  children: PropTypes.object
}

export default DragDrop
