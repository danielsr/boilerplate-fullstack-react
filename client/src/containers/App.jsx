import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store, history } from '../store/store'
import { NavBar, Footer } from '../components'
import Login from './Login'

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
            <NavBar />
            <Route path="/" component={Login} />
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
