
export const initialPageState = {
  signalRConnection: null,
  sendSignal: false,
  controltype: 'text',
  controls: [],
  isFetching: false,
  error: ''
}

export function pageReducer(state = initialPageState, action) {

  state.sendSignal=false
  switch (action.type) {

    case 'SEND_SIGNAL':
      if(state.signalRConnection) state.signalRConnection.invoke("send", "CheckList")
      return { ...state, sendSignal:false, isFetching: false, error: '' }

    case 'CLEAR_DB':
      return { ...state, isFetching: true, error: '' }
    case 'CLEAR_DB_SUCCESS':
    return { ...state, controls: action.payload, sendSignal:true, isFetching: false, error: '' }
    case 'CLEAR_DB_FAIL':
      return { ...state, error: action.payload.message, isFetching: false }

    case 'DEFAULT_REQUEST':
      return { ...state, isFetching: true, error: '' }
    case 'DEFAULT_REQUEST_SUCCESS':
      return { ...state, controls: action.payload, sendSignal:true, isFetching: false, error: '' }
    case 'DEFAULT_REQUEST_FAIL':
      return { ...state, error: action.payload.message, isFetching: false }

    case 'SAVE_LIST_CONTROLS':
      return { ...state, isFetching: true, error: '' }
    case 'SAVE_LIST_CONTROLS_SUCCESS':
      return { ...state, controls: action.payload, sendSignal:true, isFetching: false, error: '' }
    case 'SAVE_LIST_CONTROLS_FAIL':
        return { ...state, error: action.payload.message, isFetching: false }

    case 'GET_LIST_CONTROLS':
        return { ...state, isFetching: true, error: '' }
    case 'GET_LIST_CONTROLS_SUCCESS':
      const signalR = require("@aspnet/signalr");
      let connection = new signalR.HubConnectionBuilder()
          .withUrl(global.config.signalRhost)
          .build();
      connection.start()
          .then(() => connection.invoke("send", "CheckList"))
      return { ...state, controls: action.payload, signalRConnection: connection, isFetching: false, error: '' }
    case 'GET_LIST_CONTROLS_FAIL':
        return { ...state, error: action.payload.message, isFetching: false }
        
    case 'ADD_INPUT':
      return { ...state, controls: 
        [...state.controls, 
          {'id':action.payload, 'name':'field'+action.payload, 'type':state.controltype, 'value':null, 'error':null}
        ], lastindex: action.payload + 1, sendSignal:true, isFetching: false }

    case 'REMOVE_INPUT':
      for(var i=0; i<state.controls.length; i++)
      {
        if(action.model == state.controls[i].id) {
          state.controls.splice(i, 1);
          return { ...state, sendSignal:true, isFetching: false }
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
            return { ...state, sendSignal:true, isFetching: false }
          }
        });
        return { ...state, sendSignal:true, isFetching: false }
      }

    default:
      return state
  }
}
