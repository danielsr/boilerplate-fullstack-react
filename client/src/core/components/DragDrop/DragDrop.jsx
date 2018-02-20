import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

class DragDrop extends Component {
  render() {
    const { onDragEnd, children } = this.props
    return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
  }
}

export default DragDrop
