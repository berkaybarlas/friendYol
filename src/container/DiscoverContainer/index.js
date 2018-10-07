import * as React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { getInfluencers, follow } from "./actions";
import Discover from "../../stories/screens/Discover";
export interface Props {
  navigation: any;
  getInfluencers: Function;
  influencers: Object;
  follow: Function;
}
export interface State {}
class DiscoverContainer extends React.Component<Props, State> {
  componentDidMount() {
    this.props.getInfluencers();
  }

  async follow(followUserId) {
    let userId = 13997554;//await AsyncStorage.getItem("userId");
    this.props.follow(userId, followUserId);
  }

  render() {
    return (
      <Discover
        navigation={this.props.navigation}
        influencers={this.props.influencers}
        follow={this.follow.bind(this)}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    getInfluencers: () => dispatch(getInfluencers()),
    follow: (userId, followUserId) => dispatch(follow(userId, followUserId))
  };
}

const mapStateToProps = state => ({
  isLoading: state.discoverReducer.isLoading,
  influencers: state.discoverReducer.influencers
});

export default connect(
  mapStateToProps,
  bindAction
)(DiscoverContainer);
