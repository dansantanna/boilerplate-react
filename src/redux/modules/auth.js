import { createReducer } from 'utils/redux-utils'

// Constants
const SET_AUTH = 'SET_AUTH'

// Action Creators
const loginSuccess = payload => ({ type: SET_AUTH, payload })

export const login = () => () => {
  loginSuccess()
}

// Initial State
const initialState = {}

// Reducer

export default createReducer(initialState, {
  [SET_AUTH]: state => ({
    ...state
  })
})
