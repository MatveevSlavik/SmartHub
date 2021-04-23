const initialState = {
  isLoggedIn: true,
};

const logOutReducer = (state = initialState, { type }) => {
  switch (type) {
    case 'LOGOUT_SUCCESS':
      return { isLoggedIn: false };
    default:
      return state;
  }
};

export default logOutReducer;
