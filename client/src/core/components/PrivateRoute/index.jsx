import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'

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

export default PrivateRoute
