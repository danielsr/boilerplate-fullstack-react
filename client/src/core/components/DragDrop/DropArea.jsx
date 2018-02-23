import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Droppable, Draggable } from 'react-beautiful-dnd'

class DropArea extends Component {
  getItemStyle(isDragging, draggableStyle) {
    const { gridSize } = this.props
    return {
      ...draggableStyle,
      userSelect: 'none',
      padding: gridSize * 2,
      margin: `0 0 ${gridSize}px 0`
    }
  }

  getListStyle(isDraggingOver) {
    const { gridSize } = this.props
    return {
      padding: gridSize,
      minHeight: 100
    }
  }

  render() {
    const {
      id, items, renderItem, isDropDisabled, isDragDisabled, renderPlaceHolder
    } = this.props
    return (
      <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} style={this.getListStyle(snapshot.isDraggingOver)}>
            {items.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}
                isDragDisabled={isDragDisabled}
              >
                {(provided_, snapshot_) => (
                  <div>
                    <div
                      ref={provided_.innerRef}
                      {...provided_.draggableProps}
                      {...provided_.dragHandleProps}
                      style={this.getItemStyle(
                        snapshot_.isDragging,
                        provided_.draggableProps.style
                      )}
                    >
                      {renderItem(item)}
                    </div>
                    {provided_.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
            {items.length === parseInt(0, 10) && renderPlaceHolder && renderPlaceHolder()}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }
}

DropArea.propTypes = {
  id: PropTypes.string,
  items: PropTypes.array,
  renderItem: PropTypes.func,
  gridSize: PropTypes.number,
  isDropDisabled: PropTypes.bool,
  isDragDisabled: PropTypes.bool,
  renderPlaceHolder: PropTypes.func
}

export default DropArea
