import types from "../../common/types";

const initialState = {
  influencers: [],
  isLoading: true
};

export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case types.SET_INFLUENCERS:
      return {
        ...state,
        influencers: action.influencers
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
