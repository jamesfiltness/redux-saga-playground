import { call, put, takeEvery } from 'redux-saga/effects';
import sinon from 'sinon';
import { getPosts, watchGetPosts } from './index';
import * as api from '../../../api';
import * as actions from '../../../app/actions';

describe('GetPosts', () => { 
  beforeEach(() => {
    sinon.stub(api, 'apiCall').returns(Promise.resolve({some:'value'}));
  });

  afterEach(() => {
    api.apiCall.restore();
  });
  
  const generator = getPosts();
  it('should yield call', () => {
    expect(generator.next().value).toEqual(call(api.apiCall));
  });

  it('should yield put', () => {
    const posts = [{title: 'test'}];
    expect(generator.next(posts).value).toEqual(put(actions.receivePosts(posts)));
  });
});

describe('watchGetPosts', () => {
  it('should call searchMediaSaga', () => {
    const generator = watchGetPosts();
    const action = { type: 'GET_POSTS_REQUEST' };
    expect(generator.next().value).toEqual(takeEvery('GET_POSTS_REQUEST', getPosts));
  });
});


