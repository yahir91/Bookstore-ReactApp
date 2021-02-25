import {combineReducers} from 'redux';
import bookReducer from './book';

const rootReducer = combineReducers({
  book: bookReducer,
})

export default rootReducer;