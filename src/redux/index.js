import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import files from './ducks/files';
import tags from './ducks/tags';
import user from './ducks/user';
import application from './ducks/application';
import contacts from './ducks/contacts';
import messages from './ducks/messages';
import contribution from './ducks/contribution';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  files,
  user,
  contribution,
  tags,
  application,
  contacts,
  messages,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
