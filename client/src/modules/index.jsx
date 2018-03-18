import React, { Component } from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { store, history } from 'state'
import client from 'state/apollo'
import PrivateRoute from 'core/components/PrivateRoute'
import Main from './Main'
import Todo from './Todo'
import DragDrop from './DragDrop'
import Posts from './Posts'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ConnectedRouter history={history}>
            <Main>
              <Route path="/todo" component={Todo} />
              <Route path="/drop" component={DragDrop} />
              <Route path="/posts" component={Posts} />
            </Main>
          </ConnectedRouter>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App
