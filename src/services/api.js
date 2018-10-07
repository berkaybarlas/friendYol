import axios from "axios";
class API {
  getUser(token) {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token
      }
    };
    return axios.get("https://stageapi.trendyol.com/user/user", config);
  }

  getInfluencers() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    console.log("Infreq");
    return axios.get(
      "https://stagefriendyol.trendyol.com/user/influencers",
      config
    );
  }

  getMyFavorites(userId) {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    return axios.get(
      "https://stagefriendyol.trendyol.com/user/" + userId + "/favorites",
      config
    );
  }
  getFeed(userId) {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    return axios.get(
      "https://stagefriendyol.trendyol.com/user/" +
        userId +
        "/followsto/favorites",
      config
    );
  }

  getOrders(userId) {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    return axios.get(
      "https://stageorderapicore.trendyol.com/orders?userId=" + userId,
      config
    );
  }

  getFollowers(userId) {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    return axios.get(
      "https://stagefriendyol.trendyol.com/user/" + userId + "/followers",
      config
    );
  }

  getFollowings(userId) {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    return axios.get(
      "https://stagefriendyol.trendyol.com/user/" + userId + "/followings",
      config
    );
  }

  follow(userId, followUserId) {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    return axios.post(
      "https://stagefriendyol.trendyol.com/user/" +
        userId +
        "/followsto/" +
        followUserId,
      null,
      config
    );
  }

  register(userId) {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    return axios.post(
      "https://stagefriendyol.trendyol.com/user/" + userId,
      null,
      config
    );
  }

  login(username, password) {
    let clientId = "d0731960f13e41abb551ed0a45587e2f";
    const requestBody =
      "grant_type=password&client_id=" +
      clientId +
      "&username=" +
      username +
      "&password=" +
      password;
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return axios.post(
      "https://stageapi.trendyol.com/authentication/oauth2/token",
      requestBody,
      config
    );
  }
}

export default new API();
