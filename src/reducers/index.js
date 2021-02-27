import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
});

export default rootReducer;
