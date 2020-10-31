import {
  SAVE_SUBMISSIONS_REQUEST,
  SAVE_SUBMISSIONS_SUCCESS,
  SAVE_SUBMISSIONS_FAIL,
} from './Actions'

export const initialPageState = {
  singlelinetext: '1',
  multiplelinetext: '2',
  dropdown: 3,
  date: '2020-10-31',
  radio: '2',
  checkbox: true,
  checkbox2: false,

  controls: [],
  isFetching: false,
  error: ''
}

export function pageReducer(state = initialPageState, action) {
  console.log('OK')  
  switch (action.type) {
    case SAVE_SUBMISSIONS_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case SAVE_SUBMISSIONS_SUCCESS:
      return { ...state, controls: action.payload, isFetching: false, error: '' }

    case SAVE_SUBMISSIONS_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }

    default:
      return state
  }
}
