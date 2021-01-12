import axios from 'axios';

// API Endpoints
// const API_BASE_URL = 'https://homefinderapi.herokuapp.com/api/v1';
const API_BASE_URL = 'http://localhost:3001/api/v1';

export const postFormRequest = (reqUrl, userData) => axios.post(`${API_BASE_URL}/${reqUrl}`,
  userData,
  { withCredentials: true }).then(resp => resp).catch(error => error);

export const getHomesListRequest = reqUrl => axios.get(`${API_BASE_URL}/${reqUrl}`,
  { withCredentials: true }).then(resp => resp).catch(error => error);

export const postFavouriteHomeRequest = (reqUrl, id, auth = '') => axios.post(`${API_BASE_URL}/${reqUrl}/`,
  id,
  {
    headers: { Authenticate: auth },
    withCredentials: true,
  })
  .then(resp => resp)
  .catch(error => error);

export const getFavouriteHomesRequest = (reqUrl, auth = '') => axios.get(`${API_BASE_URL}/${reqUrl}`,
  {
    headers: { Authenticate: auth },
    withCredentials: true,
  })
  .then(resp => resp)
  .catch(error => error);

export const deleteFavouriteHomeRequest = (reqUrl, id, auth = '') => axios.delete(`${API_BASE_URL}/${reqUrl}/`,
  {
    headers: { Authenticate: auth },
    data: id,
    withCredentials: true,
  })
  .then(resp => resp)
  .catch(error => error);
