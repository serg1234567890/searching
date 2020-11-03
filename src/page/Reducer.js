
export const initialPageState = {
  //singlelinetext: '1',
  //multiplelinetext: '2',
  //dropdown: 3,
  //date: '2020-10-31',
  //radio: '1',
  //checkbox: true,
  //checkbox2: false,

  controltype: 'text',
  controls: [],
  lastindex: 0,
  isFetching: false,
  error: ''
}

export function pageReducer(state = initialPageState, action) {
  //console.log('Reducer')
  //console.log(action.type)
  //console.log(action.payload)

  switch (action.type) {

    case 'GET_SUBMISSIONS_REQUEST':
      return { ...state, isFetching: true, error: '' }
    case 'GET_SUBMISSIONS_SUCCESS':
      return { ...state, controls: action.payload, lastindex: action.payload ? action.payload.length + 1 : 0, isFetching: false, error: '' }
    case 'GET_SUBMISSIONS_FAIL':
      return { ...state, error: action.payload.message, isFetching: false }

    case 'GET_LIST_CONTROLS':
        return { ...state, isFetching: true, error: '' }
    case 'GET_LIST_CONTROLS_SUCCESS':
      return { ...state, controls: action.payload, lastindex: action.payload ? action.payload.length + 1 : 0, isFetching: false, error: '' }
    case 'GET_LIST_CONTROLS_FAIL':
        return { ...state, error: action.payload.message, isFetching: false }

        
    case 'ADD_INPUT':
      console.log('ADD_INPUT ' + 'field'+action.payload + ' ' + state.controltype)
      return { ...state, controls: 
        [...state.controls, 
          {'id':action.payload, 'name':'field'+action.payload, 'type':state.controltype, 'value':null}
        ], lastindex: action.payload + 1, isFetching: false }

    case 'REMOVE_INPUT':
      console.log('REMOVE_INPUT ' + action.model)
      for(var i=0; i<state.controls.length; i++)
      {
        if(action.model == state.controls[i].name) {
          state.controls.splice(i, 1);
          return { ...state, isFetching: false }
        }
      }
      return { ...state, isFetching: false }

    case 'CHANGE_INPUT':
      console.log('CHANGE_INPUT ' + action.model + ': ' + action.payload)
      if(action.model == 'page.controltype')
      {
        return { ...state, controltype: action.payload, isFetching: false }
      }
      else
      {
        state.controls.forEach(control => {
          if(action.model == control.name) {
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
