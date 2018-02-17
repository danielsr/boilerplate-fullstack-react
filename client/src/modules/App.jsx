import React, { Component } from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from '../state/store'
import Login from './admin/Login'
import Admin from './admin/Admin'

const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      ))
    }
  />
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Admin} />
            <PrivateRoute exact path="/admin" component={Admin} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
