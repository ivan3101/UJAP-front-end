import axios from 'axios';
import {loginError, loginSuccess} from "../types/auth";
import {history} from "../utilities/history";

export const loginUser = (url, {username, password}) => {
  return dispatch => {
    return axios.post(url, {username, password})
      .then(response => {
        dispatch(loginSuccessAction(response.data));
        history.push('/home');
      })
      .catch(error => {
        dispatch(loginErrorAction(error.response));
      })
  }
};

export const loginSuccessAction = ({usuario, token, tipo}) => ({
  type: loginSuccess,
  data: {
    usuario,
    token,
    tipo
  }
});

export const loginErrorAction = error => ({
  type: loginError,
  error: {
    error: true,
    errorMsg: error.data.message
  }
});

export const ratificar = () => ({
  type: 'RATIFICAR'
});
