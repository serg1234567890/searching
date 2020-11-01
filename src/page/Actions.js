export const SAVE_SUBMISSIONS_REQUEST = 'SAVE_SUBMISSIONS_REQUEST'
export const SAVE_SUBMISSIONS_SUCCESS = 'SAVE_SUBMISSIONS_SUCCESS'
export const SAVE_SUBMISSIONS_FAIL = 'SAVE_SUBMISSIONS_FAIL'
export const VALIDATION_FAIL = 'VALIDATION_FAIL'

import { Httpservice } from '../services/Httpservice';
import { Validation } from '../services/Validation';


export function onSubmitClick() {
  return (dispatch, getState) => {  
    console.log('onSubmitClick');
    
    //if(!Validation.validate(getState().page)) {
    //  dispatch( { type: VALIDATION_FAIL } );
    //  return;
    //}

    dispatch({ type: SAVE_SUBMISSIONS_REQUEST });

    Httpservice.get('api/values/list')
      .then(data => dispatch({ type: SAVE_SUBMISSIONS_SUCCESS, payload: data }) )
      .catch(error => dispatch({ type: SAVE_SUBMISSIONS_FAIL, error: true, payload: error }) )
  }
}
