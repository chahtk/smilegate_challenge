import { call, put, takeLeading } from 'redux-saga/effects';
import { signInApi } from '../api/signApi';
import getUserFromCookie from '../utils/getUserFromCookie';

// LOGIN Action Type
const LOGIN = 'user/LOGIN';
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_ERROR = 'user/LOGIN_ERROR';
const LOGOUT = 'user/LOGOUT';

// type of state
type UserState = {
  login: boolean;
  user: string;
  email: string;
  password: string;
};

// Action Generator (return Action Type)
export const loginAction = (email: string, password: string) => ({
  type: LOGIN,
  email,
  password,
});
const loginSuccessAction = (user: string) => ({
  type: LOGIN_SUCCESS,
  user: user,
});
const loginErrorAction = () => ({ type: LOGIN_ERROR });
export const logoutAction = () => ({
  type: LOGOUT,
});

// Type of Action Generator
type UserAction = {
  type: string;
  email: string;
  password: string;
  user: string;
};

// saga
function* loginSaga(action: UserAction) {
  const status: Promise<number | boolean> = yield call(signInApi, action.email, action.password);

  if (typeof status === 'boolean') {
    put(loginErrorAction());
  }
  if (typeof status === 'number' && status === 200) {
    const user: string = yield call(getUserFromCookie);
    yield put(loginSuccessAction(user));
  }
}

export function* userSaga() {
  yield takeLeading(LOGIN, loginSaga);
}

const initialState: UserState = {
  login: false,
  user: 'init',
  email: 'init',
  password: 'init',
};

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    case LOGIN_SUCCESS:
      return {
        login: true,
        user: action.user,
        email: 'logined',
        password: 'logined',
      };
    case LOGIN_ERROR:
      return initialState;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
