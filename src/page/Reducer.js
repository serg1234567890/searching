import { controls } from 'react-redux-form';
import {
  SAVE_SUBMISSIONS_REQUEST,
  SAVE_SUBMISSIONS_SUCCESS,
  SAVE_SUBMISSIONS_FAIL,
  VALIDATION_FAIL,
  ADD_CONTROL

} from './Actions'

export const initialPageState = {
  singlelinetext: '1',
  multiplelinetext: '2',
  dropdown: 3,
  date: '2020-10-31',
  radio: '1',
  checkbox: true,
  checkbox2: false,

  controltype: 'text',
  controls: [],
  isFetching: false,
  error: ''
}

export function pageReducer(state = initialPageState, action) {
  //console.log('Reducer')
  //console.log(action.type)
  //console.log(action.payload)

  switch (action.type) {
    case SAVE_SUBMISSIONS_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case SAVE_SUBMISSIONS_SUCCESS:
      return { ...state, controls: action.payload, isFetching: false, error: '' }

    case SAVE_SUBMISSIONS_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }

    case ADD_CONTROL:
      return { ...state, controls: 
        [...state.controls, 
          {'id':action.payload, 'name':'field'+action.payload, 'type':state.controltype, 'value':null}
        ], isFetching: false }

    case 'CHANGE_INPUT':
      console.log('CHANGE_INPUT ' + action.model + ' ' + action.payload)
      if(action.model == 'page.controltype')
      {
        return { ...state, controltype: action.payload, isFetching: false }
      }
      else
      {
        state.controls.forEach(control => {
          if(action.model == control.name) {
            control.value = action.payload;
            //console.log('Control ' + control.name + ': ' + control.value);
          }
        });

        return { ...state, isFetching: false }
      }

    default:
      return state
  }
}
