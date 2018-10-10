import types from "../../common/types";
const initialState = {
  isLoading: false,
  isLogged: false,
  token: null
};

export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case types.IS_LOGGED:
      return {
        ...state,
        isLogged: action.loginStatus
      };
    case types.SET_TOKEN:
      return {
        ...state,
        setToken: action.token
      };
    default:
      return state;
  }
}
