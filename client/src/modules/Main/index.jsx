import React, { Component } from 'react'
import { DragDrop, DropArea } from 'core/components/DragDrop'

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
      ]
    }
  }

  renderItem(item) {
    return <div className="alert alert-primary">{item.content}</div>
  }

  onDragEnd(result) {
    console.log(result)
  }

  render() {
    return (
      <DragDrop onDragEnd={result => this.onDragEnd(result)}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <DropArea items={this.state.items} renderItem={this.renderItem} />
            </div>
            <div className="col-md-6">
              <DropArea items={this.state.items2} renderItem={this.renderItem} />
            </div>
          </div>
        </div>
      </DragDrop>
    )
  }
}

export default Main
