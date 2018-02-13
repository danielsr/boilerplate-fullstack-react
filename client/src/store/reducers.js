import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import { types } from './actions'

const getMsg = (state = null, action) => {
  switch (action.type) {
    case types.SET_MSG:
      return action.msg
    default:
      return state
  }
}

export default combineReducers({
  msg: getMsg,
  form: formReducer,
  router: routerReducer
})
