import { combineReducers } from 'redux';
import counterReducer from './app/counter/duck/index';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
