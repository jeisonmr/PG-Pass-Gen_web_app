import { combineReducers } from "redux";

import mayReducer from './reducers/mayReducer';
import minReducer from './reducers/minReducer';
import numReducer from './reducers/numReducer';
import carReducer from './reducers/carReducer';
import rangeReducer from './reducers/rangeReducer';

// Combina los reducers individuales en un rootReducer
const rootReducer = combineReducers({
  mayusculas: mayReducer,
  minusculas: minReducer,
  numeros: numReducer,
  caracteres: carReducer,
  rango: rangeReducer
});

export default rootReducer;

