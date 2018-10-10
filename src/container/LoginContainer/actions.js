import { AsyncStorage } from "react-native";
import API from "../../services/api";
import types from "../../common/types";
export function setLoginStatus(isLogged: boolean) {
  return {
    type: types.IS_LOGGED,
    loginStatus: isLogged
  };
}

export function isLoading(isLoading: boolean) {
  return {
    type: types.IS_LOADING,
    isLoading: isLoading
  };
}

export function setToken(token: string) {
  return {
    type: types.SET_TOKEN,
    token: token
  };
}

export function saveToken(token) {
  return dispatch => {
    dispatch(setToken(token));
  };
}

export function getUser(token) {
  console.log("Token", token);

  return null;
}

export function login(username, password) {
  return dispatch => {
    dispatch(isLoading(true));
    API.login(username, password)
      .then(result => {
        var data = result.data;
        dispatch(isLoading(false));
        console.log("Token method", data);
        if (data != null && data["access_token"] != undefined) {
          dispatch(setLoginStatus(true));
          API.getUser(data["access_token"]).then(res => {
            if (res.data != null) {
              AsyncStorage.setItem("token", data["access_token"]);
              AsyncStorage.setItem("userId", res.data.User.UserId);
              console.log("UserId", res.data.User.UserId);
              API.register(res.data.User.UserId);
            }
          });
        } else {
          dispatch(setLoginStatus(false));
          dispatch(setToken("-"));
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err));
        dispatch(setToken("-"));
        dispatch(isLoading(false));
      });
  };
}
