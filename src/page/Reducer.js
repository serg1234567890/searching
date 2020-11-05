
export const initialPageState = {
  controltype: 'text',
  controls: [],
  isFetching: false,
  error: ''
}

export function pageReducer(state = initialPageState, action) {

  switch (action.type) {

    case 'CLEAR_DB':
      return { ...state, isFetching: true, error: '' }
    case 'CLEAR_DB_SUCCESS':
    return { ...state, controls: action.payload, isFetching: false, error: '' }
    case 'CLEAR_DB_FAIL':
      return { ...state, error: action.payload.message, isFetching: false }

    case 'DEFAULT_REQUEST':
      return { ...state, isFetching: true, error: '' }
    case 'DEFAULT_REQUEST_SUCCESS':
      return { ...state, controls: action.payload, isFetching: false, error: '' }
    case 'DEFAULT_REQUEST_FAIL':
      return { ...state, error: action.payload.message, isFetching: false }

    case 'SAVE_LIST_CONTROLS':
      return { ...state, isFetching: true, error: '' }
    case 'SAVE_LIST_CONTROLS_SUCCESS':
      return { ...state, controls: action.payload, isFetching: false, error: '' }
    case 'SAVE_LIST_CONTROLS_FAIL':
        return { ...state, error: action.payload.message, isFetching: false }

    case 'GET_LIST_CONTROLS':
        return { ...state, isFetching: true, error: '' }
    case 'GET_LIST_CONTROLS_SUCCESS':
        return { ...state, controls: action.payload, isFetching: false, error: '' }
    case 'GET_LIST_CONTROLS_FAIL':
        return { ...state, error: action.payload.message, isFetching: false }
        
    case 'ADD_INPUT':
      return { ...state, controls: 
        [...state.controls, 
          {'id':action.payload, 'name':'field'+action.payload, 'type':state.controltype, 'value':null, 'error':null}
        ], lastindex: action.payload + 1, isFetching: false }

    case 'REMOVE_INPUT':
      for(var i=0; i<state.controls.length; i++)
      {
        if(action.model == state.controls[i].id) {
          state.controls.splice(i, 1);
          return { ...state, isFetching: false }
        }
      }
      return { ...state, isFetching: false }

    case 'CHANGE_INPUT':
      if(action.model == 'page.controltype')
      {
        return { ...state, controltype: action.payload, isFetching: false }
      }
      else
      {
        state.controls.forEach(control => {
          if(action.model == control.id) {
            control.value = action.payload;
            return { ...state, isFetching: false }
          }
        });
        return { ...state, isFetching: false }
      }

    default:
      return state
  }
}
