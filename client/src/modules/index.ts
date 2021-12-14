import { combineReducers } from 'redux';
import userReducer from './user';

const rootReducer = combineReducers({
  userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
