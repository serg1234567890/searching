import { combineReducers } from 'redux'
import { pageReducer, initialPageState } from './Reducer'
import { createForms } from 'react-redux-form';

export const rootReducer = combineReducers({
  pageReducer,
  ...createForms( { page: initialPageState } ),  
})
