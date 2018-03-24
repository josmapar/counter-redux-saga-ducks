import { combineReducers } from 'redux';
import counterReducer from './app/counter/duck';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
