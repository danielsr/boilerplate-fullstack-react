import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from 'state'
import PrivateRoute from 'core/components/PrivateRoute'
import Login from '../modules/Main/Login'
import Main from '../modules/Main'

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute exact path="/admin" component={Main} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Routes
