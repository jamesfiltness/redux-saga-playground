import { call, put, takeEvery } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import sinon from 'sinon';
import { getPosts, watchGetPosts } from './index';
import * as api from '../../../api';
import * as actions from '../../../app/actions';

describe('GetPosts', () => { 
  beforeEach(() => {
    sinon.stub(api, 'apiCall');
  });

  afterEach(() => {
    api.apiCall.restore();
  });
  
  const gen = cloneableGenerator(getPosts)();

  it('should call the api to get posts', () => {
    expect(gen.next().value).toEqual(call(api.apiCall));
  });

  it('should put receive posts action on success', () => {
    const clone = gen.clone();
    const posts = [{title: 'test'}];
    expect(clone.next(posts).value).toEqual(put(actions.receivePosts(posts)));
  });

  it('should put api call error on error', () => {
    const clone = gen.clone();
    const error = Promise.reject(new Error('something went wrong'));
    expect(clone.throw('some error').value).toEqual(put({ type: "API_CALL_FAILURE", error: "some error" }));
  });
});

describe('watchGetPosts', () => {
  it('should call searchMediaSaga', () => {
    const generator = watchGetPosts();
    const action = { type: 'GET_POSTS_REQUEST' };
    expect(generator.next().value).toEqual(takeEvery('GET_POSTS_REQUEST', getPosts));
  });
});


