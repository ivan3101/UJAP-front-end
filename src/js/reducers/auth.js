import {loginError, loginSuccess} from "../types/auth";

const authReducerDefaultState = {
  isLoggedIn: false,
  error: false,
  errorMsg: null,
  usuario: {}
};

export default (state = authReducerDefaultState, action) => {
  switch (action.type) {

    case loginSuccess:
      return {
        isLoggedIn: true,
        error: false,
        errorMsg: null,
        ...action.data
      };

    case loginError:
      return {
        ...action.error
      };

    case 'RATIFICAR':
      return {
        ...state,
        ratificado: true
      };

    default:
      return state;
  }
};
