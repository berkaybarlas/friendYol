import API from "../../services/api";
import { AsyncStorage } from "react-native";
import types from "../../common/types";

export function setFeed(feed: any) {
  return {
    type: types.SET_FEED,
    feed: feed
  };
}

export function isLoading(isLoading: boolean) {
  return {
    type: types.IS_LOADING,
    isLoading: isLoading
  };
}

export function getFeed(userId) {
  return dispatch => {
    dispatch(isLoading(true));
    console.log("Getfeed", userId);
    API.getFeed(userId)
      .then(result => {
        var data = result.data;
        dispatch(setFeed(data));
        dispatch(isLoading(false));
      })
      .catch(err => {
        console.log(JSON.stringify(err));
        dispatch(isLoading(false));
      });
  };
}
