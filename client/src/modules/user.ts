import { call, delay, put, takeLeading } from 'redux-saga/effects';
import { getUserProfile, UserProfile } from '../api/testApi';

// LOGIN Action Type
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const LOGOUT = 'user/LOGOUT';

// type of state
type UserState = {
  login: boolean;
  id: number;
  email: string;
};

// Action Generator (return Action Type)
export const loginAction = () => ({
  type: LOGIN,
});
export const loginSuccessAction = (action: any) => ({
  type: LOGIN_SUCCESS,
  payload: action.payload,
});
export const logoutAction = () => ({
  type: LOGOUT,
});

function* loginSaga() {
  yield delay(2000);
  try {
    const data: UserProfile = yield call(getUserProfile);
    yield put({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_ERROR,
      payload: e,
      error: true,
    });
  }
}

export function* userSaga() {
  yield takeLeading(LOGIN, loginSaga);
}

// Type of Action Generator
type UserAction =
  | ReturnType<typeof loginAction>
  | ReturnType<typeof logoutAction>
  | ReturnType<typeof loginSuccessAction>;

const initialState: UserState = {
  login: false,
  id: -1,
  email: 'default',
};

const userReducer = (state: UserState = initialState, action: any): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
        login: false,
        id: 999,
        email: 'loading',
      };
    case LOGIN_SUCCESS:
      return {
        login: true,
        id: action.payload.id,
        email: action.payload.email,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
