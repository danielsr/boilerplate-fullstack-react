import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class TodoList extends Component {
  render() {
    const { todoQuery } = this.props
    if (todoQuery && todoQuery.loading) {
      return <div>Loading</div>
    }

    if (todoQuery && todoQuery.error) {
      return <div>Error</div>
    }

    return (
      <ul className="list-group mt-3 mb-3">
        {todoQuery.todos.map(todo => (
          <li key={todo.id} className="list-group-item">
            {todo.text}
          </li>
        ))}
      </ul>
    )
  }
}

export const TODO_QUERY = gql`
  query TodoQuery {
    todos {
      id
      text
    }
  }
`

export default graphql(TODO_QUERY, { name: 'todoQuery', options: { pollInterval: 5000 } })(TodoList)
