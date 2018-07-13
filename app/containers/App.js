import React from 'react';
import { connect } from 'react-redux';

import * as types from '../../constants/action-types';
import Posts from '../components/posts';

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => dispatch({ type: types.GET_POSTS_REQUEST })
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Posts);
