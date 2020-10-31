import {
  SAVE_SUBMISSIONS_REQUEST,
  SAVE_SUBMISSIONS_SUCCESS,
  SAVE_SUBMISSIONS_FAIL,
} from './Actions'

export function pageReducer(state = initialState, action) {
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
