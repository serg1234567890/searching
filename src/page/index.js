import { combineReducers } from 'redux'
import { pageReducer } from './Reducer'

export const rootReducer = combineReducers({
  page: pageReducer
})
