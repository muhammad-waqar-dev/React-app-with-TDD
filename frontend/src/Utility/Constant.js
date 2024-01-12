const BASE_URL = process.env.REACT_APP_BACKEND_PROTOCOL + '://' +  process.env.REACT_APP_BACKEND_BASE_URL + ':' + process.env.REACT_APP_BACKEND_PORT ;

export const LOGIN_URL = BASE_URL + '/login';
export const SIGNUP_URL = BASE_URL + '/signup';
export const LOGOUT_URL = BASE_URL + '/logout';