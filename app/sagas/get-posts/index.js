import { call, put, takeEvery } from 'redux-saga/effects';
import { apiCall } from '../../../api';
import * as actions from '../../actions';
import { GET_POSTS_REQUEST } from '../../constants/action-types';

export function* getPosts() {
  try {
    const response = yield call(apiCall);
    yield put(actions.receivePosts(response));
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

export function* watchGetPosts(action) {
  // take latest call - cancel any in progress
  yield takeEvery(GET_POSTS_REQUEST, getPosts);
}
