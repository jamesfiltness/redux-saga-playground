import { fork } from 'redux-saga/effects';
import { watchGetPosts } from './watchers';

export default function* rootSaga() {
  yield fork(watchGetPosts);
}
