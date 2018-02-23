import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragDrop, DropArea } from '.'

class Sortable extends Component {
  render() {
    const {
      id, onDragEnd, items, renderItem, gridSize
    } = this.props
    return (
      <DragDrop onDragEnd={onDragEnd}>
        <DropArea id={id} items={items} renderItem={renderItem} gridSize={gridSize} />
      </DragDrop>
    )
  }
}

Sortable.propTypes = {
  id: PropTypes.string,
  onDragEnd: PropTypes.func,
  items: PropTypes.array,
  renderItem: PropTypes.func,
  gridSize: PropTypes.number
}

Sortable.defaultProps = {
  id: 'sort'
}

export default Sortable
