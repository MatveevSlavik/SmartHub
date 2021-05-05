const initialState = {
  users: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_USERS_SUCCESS':
      return { ...state, users: payload };
    default:
      return state;
  }
};

export default usersReducer;
