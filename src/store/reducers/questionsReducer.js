const initialState = {
  questions: [],
};

const questionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return { ...state, questions: payload };
    default:
      return state;
  }
};

export default questionsReducer;
