import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import files from './ducks/files';


const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  files,
});

const store = createStore( rootReducer, applyMiddleware(thunk, logger),
);


export default store;