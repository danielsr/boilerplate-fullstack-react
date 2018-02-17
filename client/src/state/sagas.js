import { put, takeEvery, all, call, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { types, actions } from './actions'

export function* saveUser({ values }) {
  yield put(push('/login'))
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.SET_MSG, saveUser)
  ])
}
