
import { Httpservice } from '../services/Httpservice';

const defaultlist=[
  {'id':null,'name':'field','type':'text','value':'12345','error':null},
  {'id':null,'name':'field','type':'textarea','value':null,'error':null},
  {'id':null,'name':'field','type':'select','value':'1','error':null},
  {'id':null,'name':'field','type':'date','value':'04112020','error':null},
  {'id':null,'name':'field','type':'radio','value':'off','error':null},
  {'id':null,'name':'field','type':'checkbox','value':'true','error':null}
]

export function getControls() {
  return (dispatch) => {  
    dispatch({ type: 'GET_LIST_CONTROLS' })
    Httpservice.post('api/search/list', defaultlist, 'json')
      .then(data => dispatch({ type: 'GET_LIST_CONTROLS_SUCCESS', payload: data }) )
      .catch(error => dispatch({ type: 'GET_LIST_CONTROLS_FAIL', error: true, payload: error }) )
  }
}

export function clearDB() {
  return (dispatch, getState) => {  
    var state = getState().page
    dispatch({ type: 'CLEAR_DB' })
    Httpservice.post('api/search/clear', defaultlist, 'json')
      .then(data => dispatch({ type: 'CLEAR_DB_SUCCESS', payload: data }) )
      .catch(error => dispatch({ type: 'CLEAR_DB_FAIL', error: true, payload: error }) )
  }
}

export function addControl() {
  return (dispatch, getState) => {  
    var state = getState().page
    Httpservice.post('api/search/add', {id:0, type:state.controltype}, 'json')
    .then(data => dispatch({ type: 'ADD_INPUT', payload: data.id }) )
  }
}

export function getDefault() {
  return (dispatch) => {
    dispatch({ type: 'DEFAULT_REQUEST' })
    Httpservice.post('api/search/set', defaultlist, 'json')
    .then(data => dispatch({ type: 'DEFAULT_REQUEST_SUCCESS', payload: data }) )
    .catch(error => dispatch({ type: 'DEFAULT_REQUEST_FAIL', error: true, payload: error }) )
  }
}

export function saveControls() {
  return (dispatch, getState) => {  
    var state = getState().page
    dispatch({ type: 'SAVE_LIST_CONTROLS' })
    Httpservice.post('api/search/set', state.controls, 'json')
      .then(data => dispatch({ type: 'SAVE_LIST_CONTROLS_SUCCESS', payload: data }) )
      .catch(error => dispatch({ type: 'SAVE_LIST_CONTROLS_FAIL', error: true, payload: error }) )
  }
}

export function changeInputAction(id, value) {
  return (dispatch, getState) => {  
    var page = getState().page
    if(id!='page.controltype'){
      Httpservice.post('api/search/change', {id:id, type:page.controltype, value:value} )
    }
    dispatch({ type: 'CHANGE_INPUT', model: id, payload: value })
  }
}

export function removeInputAction(id) {
  return (dispatch) => {
    Httpservice.post('api/search/remove', {id:id})
    dispatch({ type: 'REMOVE_INPUT', model: id })
  }
}

