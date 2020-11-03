
import { Httpservice } from '../services/Httpservice';
import { Validation } from '../services/Validation';

export function changeInputAction(name, value) {
  return (dispatch, getState) => {  
    var page = getState().page
    if(name!='page.controltype'){
      Httpservice.post('api/search/change', {id:0, name: name, type: page.controltype, value: value} )
    }
    dispatch({ type: 'CHANGE_INPUT', model: name, payload: value })
  }
}

export function removeInputAction(name) {
  return (dispatch, getState) => {  
    Httpservice.post('api/search/remove', {id:0, name: name});
    dispatch({ type: 'REMOVE_INPUT', model: name });
  }
}

export function addControl() {
  return (dispatch, getState) => {  
    var page = getState().page
    Httpservice.post('api/search/add', {id:0, name: 'field' + page.lastindex, type: page.controltype})
    .then(data => dispatch({ type: 'ADD_INPUT', payload: page.lastindex }) )
  }
}

export function getControls() {
  return (dispatch, getState) => {  
    dispatch({ type: 'GET_LIST_CONTROLS' })
    Httpservice.get('api/search/list')
      .then(data => dispatch({ type: 'GET_LIST_CONTROLS_SUCCESS', payload: data }) )
      .catch(error => dispatch({ type: 'GET_LIST_CONTROLS_FAIL', error: true, payload: error }) )
  }
}

export function onSubmitClick() {
  return (dispatch, getState) => {  
    dispatch({ type: 'GET_SUBMISSIONS_REQUEST' })
    Httpservice.get('api/search/reset')
      .then(data => dispatch({ type: 'GET_SUBMISSIONS_SUCCESS', payload: data }) )
      .catch(error => dispatch({ type: 'GET_SUBMISSIONS_FAIL', error: true, payload: error }) )
  }
}
