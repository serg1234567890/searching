
export const initialPageState = {
  controltype: 'text',
  controls: [],
  lastindex: 0,
  isFetching: false,
  error: ''
}
const defaultlist=[
  {'id':null,'name':'field','type':'text','value':'12345','error':null},
  {'id':null,'name':'field','type':'textarea','value':null,'error':null},
  {'id':null,'name':'field','type':'select','value':'1','error':null},
  {'id':null,'name':'field','type':'date','value':'04112020','error':null},
  {'id':null,'name':'field','type':'radio','value':'off','error':null},
  {'id':null,'name':'field','type':'checkbox','value':'true','error':null}
]

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
      var lastid = action.payload + 1
      defaultlist.forEach(element => { element.id = lastid; element.name = 'field'+lastid; ++lastid; });
      return { ...state, controls: defaultlist, lastindex: id, isFetching: false, error: '' }
    case 'DEFAULT_REQUEST_FAIL':
      return { ...state, error: action.payload.message, isFetching: false }

    case 'SAVE_LIST_CONTROLS':
      return { ...state, isFetching: true, error: '' }
    case 'SAVE_LIST_CONTROLS_SUCCESS':
      console.log(action.payload);
      return { ...state, controls: action.payload, isFetching: false, error: '' }
    case 'SAVE_LIST_CONTROLS_FAIL':
        return { ...state, error: action.payload.message, isFetching: false }

    case 'GET_LIST_CONTROLS':
        return { ...state, isFetching: true, error: '' }
    case 'GET_LIST_CONTROLS_SUCCESS':
      //console.log('GET_LIST_CONTROLS_SUCCESS' + action.payload);
      if(action.payload.length>0){
        var id = state.controls&&state.controls.length>0?state.controls[state.controls.length-1].id+1:0;
        return { ...state, controls: action.payload, lastindex: id, isFetching: false, error: '' }
      }
      else {
        var lastid = 1
        defaultlist.forEach(element => { element.id = lastid; element.name = 'field'+lastid; ++lastid; });
        return { ...state, controls: defaultlist, lastindex: id, isFetching: false, error: '' }
      }
    case 'GET_LIST_CONTROLS_FAIL':
        return { ...state, error: action.payload.message, isFetching: false }
        
    case 'ADD_INPUT':
      console.log('ADD_INPUT ' + 'field'+action.payload + ' ' + state.controltype)
      return { ...state, controls: 
        [...state.controls, 
          {'id':action.payload, 'name':'field'+action.payload, 'type':state.controltype, 'value':null, 'error':null}
        ], lastindex: action.payload + 1, isFetching: false }

    case 'REMOVE_INPUT':
      console.log('REMOVE_INPUT ' + action.model)
      for(var i=0; i<state.controls.length; i++)
      {
        if(action.model == state.controls[i].id) {
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
