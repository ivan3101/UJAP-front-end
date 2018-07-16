import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/auth';
import materiasReducer from '../reducers/materias';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      materias: materiasReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
