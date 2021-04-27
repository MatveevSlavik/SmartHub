const initialState = {
    tags: [],
  };
  
  const tagsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'FETCH_TAGS_SUCCESS':
        return { ...state, tags: payload };
      default:
        return state;
    }
  };
  
  export default tagsReducer;
  