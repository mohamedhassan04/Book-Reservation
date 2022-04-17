const initialData = {
  books: [],
};

export const booksReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_BOOKS": {
      return {
        ...state,
        books: action.payload,
      };
    }
    default:
      return state;
  }
};
