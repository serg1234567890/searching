export const SAVE_SUBMISSIONS_REQUEST = 'SAVE_SUBMISSIONS_REQUEST'
export const SAVE_SUBMISSIONS_SUCCESS = 'SAVE_SUBMISSIONS_SUCCESS'
export const SAVE_SUBMISSIONS_FAIL = 'SAVE_SUBMISSIONS_FAIL'

import { services } from '../services/services';


export function onSubmitClick() {
  return (dispatch, getState) => {  
    dispatch({ type: SAVE_SUBMISSIONS_REQUEST });

    console.log('onSubmitClick');
    services.validate(getState().page);

    services.get('api/values/list')
      .then(data => dispatch({ type: SAVE_SUBMISSIONS_SUCCESS, payload: data }) )
      .catch(error => dispatch({ type: SAVE_SUBMISSIONS_FAIL, error: true, payload: error }) )
  }
}
