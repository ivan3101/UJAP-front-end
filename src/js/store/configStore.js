import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import materiasReducer from '../reducers/materias';
import horarioReducer from '../reducers/horario';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers({
      auth: authReducer,
      materias: materiasReducer,
      horario: horarioReducer
    }),
   composeEnhancers(
     applyMiddleware(thunk)
   )
  );
};
