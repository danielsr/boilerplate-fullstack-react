import React, { Component } from 'react'
import { Page } from 'core/components'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

class Todo extends Component {
  render() {
    return (
      <Page title="ToDo">
        <TodoAdd />
        <TodoList />
      </Page>
    )
  }
}

export default Todo
