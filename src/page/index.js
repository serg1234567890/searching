import { combineReducers } from 'redux'
import { pageReducer } from './Reducer'
import { createForms } from 'react-redux-form';

const initialPageState = {
  singlelinetext: '1',
  multiplelinetext: '2',
  dropdown: 3,
  date: '2020-10-31',
  radio: '2',
  checkbox: true,
  checkbox2: false,

  controls: [],
  isFetching: false,
  error: '',
}

export const rootReducer = combineReducers({
  page: pageReducer,
  ...createForms(
    { page: initialPageState }
  ),  
})
