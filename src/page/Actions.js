
import { Httpservice } from '../services/Httpservice';
import { Validation } from '../services/Validation';

export function changeInputAction(id, value) {
  return (dispatch, getState) => {  
    var page = getState().page
    if(name!='page.controltype'){
      Httpservice.post('api/search/change', {id:id, name: '', type: page.controltype, value: value} )
    }
    dispatch({ type: 'CHANGE_INPUT', model: id, payload: value })
  }
}

export function removeInputAction(id) {
  return (dispatch) => {
    console.log(id)
    Httpservice.post('api/search/remove', {id:id})
    dispatch({ type: 'REMOVE_INPUT', model: id })
  }
}

export function addControl() {
  return (dispatch, getState) => {  
    var state = getState().page
    var id = state.controls&&state.controls.length>0?state.controls[state.controls.length-1].id+1:0
    Httpservice.post('api/search/add', {id:0, name: 'field' + id, type: state.controltype})
    dispatch({ type: 'ADD_INPUT', payload: id })
  }
}

export function getControls() {
  return (dispatch) => {  
    dispatch({ type: 'GET_LIST_CONTROLS' })
    Httpservice.get('api/search/list')
      .then(data => dispatch({ type: 'GET_LIST_CONTROLS_SUCCESS', payload: data }) )
      .catch(error => dispatch({ type: 'GET_LIST_CONTROLS_FAIL', error: true, payload: error }) )
  }
}

export function getDefault() {
  return (dispatch) => {  
    dispatch({ type: 'DEFAULT_REQUEST' })
    Httpservice.get('api/search/lastid')
    .then(data => dispatch({ type: 'DEFAULT_REQUEST_SUCCESS', payload: data }) )
    .catch(error => dispatch({ type: 'DEFAULT_REQUEST_FAIL', error: true, payload: error }) )
  }
}

export function saveControls() {
  return (dispatch, getState) => {  
    var state = getState().page
    //console.log(JSON.stringify(state.controls))
    dispatch({ type: 'SAVE_LIST_CONTROLS' })
    Httpservice.post('api/search/set', state.controls, 'json')
      .then(data => dispatch({ type: 'SAVE_LIST_CONTROLS_SUCCESS', payload: data }) )
      .catch(error => dispatch({ type: 'SAVE_LIST_CONTROLS_FAIL', error: true, payload: error }) )
  }
}
export function clearDB() {
  return (dispatch, getState) => {  
    var state = getState().page
    //console.log(JSON.stringify(state.controls))
    dispatch({ type: 'CLEAR_DB' })
    Httpservice.get('api/search/clear')
      .then(data => dispatch({ type: 'CLEAR_DB_SUCCESS', payload: data }) )
      .catch(error => dispatch({ type: 'CLEAR_DB_FAIL', error: true, payload: error }) )
  }
}
