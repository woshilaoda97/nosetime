import { combineReducers } from 'redux';
import article from './article.redux';
import user from './user.redux';

const rootReducer = combineReducers({
  article,
  user
})

export default rootReducer;
