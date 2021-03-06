import { combineReducers } from 'redux';
import user, { userSaga } from './user';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  user,
});

export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga() {
  yield all([userSaga()]);
}

export default rootReducer;
