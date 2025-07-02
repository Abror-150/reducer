const initialState = {
  users: [],
  loading: false,
  error: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "USER_LOADING":
      return { ...state, loading: true };

    case "GET_USERS":
      return { ...state, users: action.payload, loading: false };

    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((item: any) =>
          item.id == action.payload.id ? action.payload : item
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((u: any) => u.id !== action.payload),
      };
    case "USERS_ERROR":
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};
