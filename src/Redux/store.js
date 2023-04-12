// src/store.js
import {createStore}  from 'redux';
import rootReducer from './rootReducers';
// importa el archivo con los reducers de tu aplicación

const store = createStore(rootReducer); // crea el store de Redux con los reducers

export default store;
