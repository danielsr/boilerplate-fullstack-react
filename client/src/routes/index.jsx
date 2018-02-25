import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { store, history } from 'state'
import client from 'state/apollo'
import PrivateRoute from 'core/components/PrivateRoute'
import Login from '../modules/Main/Login'
import Main from '../modules/Main'

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ConnectedRouter history={history}>
            <div>
              <Route path="/login" component={Login} />
              <Route exact path="/" component={Main} />
              <Route exact path="/admin" component={Main} />
            </div>
          </ConnectedRouter>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default Routes
