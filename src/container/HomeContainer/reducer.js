import types from "../../common/types";

const initialState = {
  isLoading: false,
  feed: []
};

export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case types.SET_FEED:
      return {
        ...state,
        feed: action.feed
      };
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
}
