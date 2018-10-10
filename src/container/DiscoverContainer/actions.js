import types from "../../common/types";
import API from "../../services/api";

export function isLoading(bool: boolean) {
  return {
    type: types.IS_LOADING,
    isLoading: bool
  };
}

export function setInfluencers(influencers: any) {
  return {
    type: types.SET_INFLUENCERS,
    influencers: influencers
  };
}

export function follow(userId, followUserId) {
  return dispatch => {
    dispatch(isLoading(true));
    console.log("From UserId",userId);
    console.log("To UserId",followUserId);
    API.follow(userId, followUserId).then(res=>{
      console.log("Follow result",result);
    }).catch(err=>{
      console.log(err)
    });
    dispatch(isLoading(false));
  };
}

export function getInfluencers() {
  return dispatch => {
    dispatch(isLoading(true));
    API.getInfluencers().then(res => {
      let data = res.data;
      console.log("Inf", data);
      dispatch(setInfluencers(data));
      dispatch(isLoading(false));
    });
  };
}
