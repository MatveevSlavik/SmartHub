const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, { type }) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true };
    case 'LOGIN_FAILED':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
