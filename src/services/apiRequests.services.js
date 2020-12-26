import axios from 'axios';

// API Endpoints
const API_BASE_URL = 'https://homefinderapi.herokuapp.com/api/v1';
// const SIGN_UP = `${API_BASE_URL}/sign_up`;
// const SIGN_IN = `${API_BASE_URL}/sign_in`;
// const LOG_OUT = `${API_BASE_URL}/log_out`;
// const RENT_HOMES = `${API_BASE_URL}/homes`;

export const formRequest = (reqUrl, userData, navRoute, history, dispatch, actions) => {
  axios.post(`${API_BASE_URL}/${reqUrl}`,
    userData,
    { withCredentials: true }).then(response => {
    if (response.statusText === 'Created') {
      console.log(response);
      dispatch(actions.userActions.createUser(response.data));
      history.push(navRoute);
    } else {
      // dispatch an error action for the response errors.
      console.log('todo populate registration error');
    }
  }).catch(error => {
    // dispatch an error action for the request errors.
    console.log('registrations error', error);
  });
};

export const postFormRequest = (reqUrl, userData) => axios.post(`${API_BASE_URL}/${reqUrl}`,
  userData,
  { withCredentials: true }).then(resp => resp).catch(error => error);
