import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import files from './ducks/files';
import user from './ducks/user';
import contribution from './ducks/contribution';


const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  files,
  user,
  contribution,
});

const store = createStore( rootReducer, applyMiddleware(thunk, logger),
);


export default store;