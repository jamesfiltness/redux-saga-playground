import { combineReducers } from 'redux';

function posts(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_POSTS':
      return state.concat(action.posts);
    default: 
      return state; 
  }
}

const rootReducer = combineReducers({
  posts
});

export default rootReducer;