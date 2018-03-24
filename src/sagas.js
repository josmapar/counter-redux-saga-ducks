import { fork } from 'redux-saga/effects';
import { watchCounter } from './app/counter/duck/index';

export default function* startForeman() {
  yield fork(watchCounter);
}
