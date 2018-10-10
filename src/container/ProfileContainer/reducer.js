import types from "../../common/types";
const initialState = {
  isLoading: false,
  user: null,
  followings: [],
  followers: [],
  orders: [],
  myFavorites: []
};

export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.user
      };
    case types.SET_FOLLOWERS:
      return {
        ...state,
        followers: action.followers
      };
    case types.SET_FOLLOWINGS:
      return {
        ...state,
        followings: action.followings
      };
    case types.SET_ORDERS:
      return {
        ...state,
        orders: action.orders
      };
    case types.SET_MYFAVORITES:
      return {
        ...state,
        myFavorites: action.myFavorites
      };
    default:
      return state;
  }
}
