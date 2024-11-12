const defaultState = {
  isAuth: true,
};
export const authReducer = (state = defaultState, action) => {
  // action = {type:'', isAuth:''}
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};
