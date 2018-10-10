// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";

import Profile from "../../stories/screens/Profile";
import {
  getUser,
  getFollowers,
  getFollowings,
  getOrders,
  getMyFavorites
} from "./actions";

export interface Props {
  navigation: any;
  getUser: Function;
  getFollowers: Function;
  getFollowings: Function;
  isLoading: boolean;
  token: string;
  followings: any;
  followers: any;
  orders: any;
  myFavorites: any;
}
export interface State {}
class ProfileContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem("token");
    this.props.getUser(token);
  }

  render() {
    return (
      <Profile
        navigation={this.props.navigation}
        user={this.props.user}
        followers={this.props.followers}
        followings={this.props.followings}
        orders={this.props.orders}
        myFavorites={this.props.myFavorites}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    getUser: token => dispatch(getUser(token)),
    getFollowers: userId => dispatch(getFollowers(userId)),
    getFollowings: userId => dispatch(getFollowings(userId)),
    getOrders: userId => dispatch(getOrders(userId)),
    getMyFavorites: userId => dispatch(getMyFavorites(userId))
  };
}

const mapStateToProps = state => ({
  token: state.loginReducer.token,
  user: state.profileReducer.user,
  isLoading: state.profileReducer.isLoading,
  followers: state.profileReducer.followers,
  followings: state.profileReducer.followings,
  orders: state.profileReducer.orders,
  myFavorites: state.profileReducer.myFavorites
});

export default connect(
  mapStateToProps,
  bindAction
)(ProfileContainer);
