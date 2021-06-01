import { combineReducers } from 'redux';

import { rootReducer as posts } from '../resources/posts';
import { rootReducer as comments } from '../resources/comments';

const reducers = combineReducers({
  posts,
  comments,
});

export default reducers;
