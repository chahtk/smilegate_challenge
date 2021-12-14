// Action Type
const LOGIN = 'user/LOGIN' as const;
const LOGOUT = 'user/LOGOUT' as const;

// type of state
type UserState = {
  id: number;
  email: string;
};

// Action Generator (return Action Type)
export const loginAction = (userInfo: UserState) => ({
  type: LOGIN,
  payload: userInfo,
});
export const logoutAction = () => ({
  type: LOGOUT,
});

// Type of Action Generator
type UserAction =
  | ReturnType<typeof loginAction>
  | ReturnType<typeof logoutAction>;

const initialState: UserState = {
  id: -1,
  email: '',
};

const userReducer = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
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
