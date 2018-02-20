import React, { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
})

class DropArea extends Component {
  render() {
    const { items, renderItem } = this.props
    return (
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided_, snapshot_) => (
                  <div>
                    <div
                      ref={provided_.innerRef}
                      {...provided_.draggableProps}
                      {...provided_.dragHandleProps}
                      style={getItemStyle(snapshot_.isDragging, provided_.draggableProps.style)}
                    >
                      {renderItem(item)}
                    </div>
                    {provided_.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }
}

export default DropArea
