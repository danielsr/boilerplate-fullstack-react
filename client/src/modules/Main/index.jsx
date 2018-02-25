import React, { Component } from 'react'
import { DragDrop, DropArea, Sortable } from 'core/components/DragDrop'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 1, content: 'teste 1' },
        { id: 2, content: 'teste 2' },
        { id: 3, content: 'teste 3' }
      ],
      items2: [
        { id: 4, content: 'teste 4' },
        { id: 5, content: 'teste 5' },
        { id: 6, content: 'teste 6' }
      ],
      items3: this.getItems(500),
      items4: [
        { id: 10, content: 'teste 10' },
        { id: 11, content: 'teste 11' },
        { id: 12, content: 'teste 12' }
      ]
    }
  }

  getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
      id: `item-${k}`,
      content: `item ${k}`
    }))

  renderItem(item) {
    return <div className="alert alert-primary">{item.content}</div>
  }

  renderPlaceHolder() {
    return <div className="alert alert-secondary">Drop items here...</div>
  }

  renderItemLayout(item) {
    return (
      <div className="card">
        <div className="card-header">{item.content}</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    )
  }

  onDragDrop(result) {
    if (!result.source || !result.destination) return

    const srcId = result.source.droppableId
    const destId = result.destination.droppableId
    const src = this.state[srcId]
    const dest = this.state[destId]

    const [item] = src.splice(result.source.index, 1)
    dest.splice(result.destination.index, 0, item)

    this.setState({
      [srcId]: src,
      [destId]: dest
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="mt-4">Drag and Drop</h1>
        <hr />
        <DragDrop onDragEnd={result => this.onDragDrop(result)}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <DropArea
                  id="items"
                  items={this.state.items}
                  renderItem={this.renderItem}
                  renderPlaceHolder={this.renderPlaceHolder}
                  gridSize={1}
                />
              </div>
              <div className="col-md-6">
                <DropArea
                  id="items2"
                  items={this.state.items2}
                  renderItem={this.renderItem}
                  renderPlaceHolder={this.renderPlaceHolder}
                  gridSize={1}
                />
              </div>
            </div>
          </div>
        </DragDrop>
        <h1 className="mt-4">Sortable (Layout)</h1>
        <hr />
        <Sortable
          id="items4"
          items={this.state.items4}
          renderItem={this.renderItemLayout}
          gridSize={1}
          onDragEnd={result => this.onDragDrop(result)}
        />
        <h1 className="mt-4">Sortable (Many items)</h1>
        <hr />
        <Sortable
          id="items3"
          items={this.state.items3}
          renderItem={this.renderItem}
          gridSize={1}
          onDragEnd={result => this.onDragDrop(result)}
        />
      </div>
    )
  }
}

export default Main
