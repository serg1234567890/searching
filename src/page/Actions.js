export const SAVE_SUBMISSIONS_REQUEST = 'SAVE_SUBMISSIONS_REQUEST'
export const SAVE_SUBMISSIONS_SUCCESS = 'SAVE_SUBMISSIONS_SUCCESS'
export const SAVE_SUBMISSIONS_FAIL = 'SAVE_SUBMISSIONS_FAIL'

import { services } from '../services/services';

export const saveSubmissions = () => (dispatch, getState) => {  

  console.log('saveSubmissions');
  services.validate(getState().page);

  dispatch({ type: SAVE_SUBMISSIONS_REQUEST });

  services.get('api/values')
    .then(data => dispatch({ type: SAVE_SUBMISSIONS_SUCCESS, payload: data }) )
    .catch(error => dispatch({ type: SAVE_SUBMISSIONS_FAIL, error: true, payload: error }) )
}
