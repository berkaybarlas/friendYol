// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { getFeed } from "./actions";
import API from "../../services/api";
export interface Props {
  navigation: any;
  getFeed: Function;
  feed: any;
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
  async componentDidMount() {
    var token = await AsyncStorage.getItem("token");
    console.log("UserId", token);
    var user = await API.getUser(token);
    console.log("UserId",user.data.User.UserId)
    this.props.getFeed(user.data.User.UserId);
  }

  render() {
    return <Home navigation={this.props.navigation} feed={this.props.feed} />;
  }
}

function bindAction(dispatch) {
  return {
    getFeed: userId => dispatch(getFeed(userId))
  };
}

const mapStateToProps = state => ({
  feed: state.homeReducer.feed,
  isLoading: state.homeReducer.isLoading
});
export default connect(
  mapStateToProps,
  bindAction
)(HomeContainer);
