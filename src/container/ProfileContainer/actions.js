import { AsyncStorage } from "react-native";
import API from "../../services/api";
import types from "../../common/types";

export function isLoading(isLoading: boolean) {
  return {
    type: types.IS_LOADING,
    isLoading: isLoading
  };
}

export function setUser(user: any) {
  return {
    type: types.SET_USER,
    user: user
  };
}

export function setFollowers(followers: any) {
  return {
    type: types.SET_FOLLOWERS,
    followers: followers
  };
}

export function setFollowings(followings: any) {
  return {
    type: types.SET_FOLLOWINGS,
    followings: followings
  };
}

export function setOrders(orders: any) {
  return {
    type: types.SET_ORDERS,
    orders: orders
  };
}

export function setMyFavorites(myFavorites: any) {
  return {
    type: types.SET_MYFAVORITES,
    myFavorites: myFavorites
  };
}

export function getOrders(userId: number) {
  return dispatch => {
    dispatch(isLoading(true));
    API.getOrders(userId)
      .then(res => {
        dispatch(isLoading(false));
        dispatch(setOrders(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(isLoading(false));
      });
  };
}

export function getMyFavorites(userId: number) {
  return dispatch => {
    dispatch(isLoading(true));
    API.getMyFavorites(userId)
      .then(res => {
        dispatch(isLoading(false));
        dispatch(setMyFavorites(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(isLoading(false));
      });
  };
}

export function getFollowers(userId: number) {
  return dispatch => {
    dispatch(isLoading(true));
    API.getFollowers(userId)
      .then(res => {
        dispatch(isLoading(false));
        dispatch(setFollowers(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(isLoading(false));
      });
  };
}

export function getFollowings(userId: number) {
  return dispatch => {
    dispatch(isLoading(true));
    API.getFollowings(userId)
      .then(res => {
        dispatch(isLoading(false));
        dispatch(setFollowings(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(isLoading(false));
      });
  };
}

export function getUser(token) {
  return dispatch => {
    dispatch(isLoading(true));

    API.getUser(token)
      .then(result => {
        var data = result.data;
        dispatch(isLoading(false));
        if ((data != null) & data.IsSuccess) {
          dispatch(setUser(data.User));
          dispatch(getFollowers(data.User.UserId));
          dispatch(getFollowings(data.User.UserId));
          dispatch(getOrders(data.User.UserId));
          dispatch(getMyFavorites(data.User.UserId));
        } else {
          AsyncStorage.clear();
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err));
        dispatch(isLoading(false));
      });
  };
}
