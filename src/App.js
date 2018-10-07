// @flow
import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Root } from "native-base";
import Tabbar from "./common/components/Tabbar";
import LoginPage from "./container/LoginContainer";
import HomePage from "./container/HomeContainer";
import ProfilePage from "./container/ProfileContainer";
import DiscoverPage from "./container/DiscoverContainer";

const Home = TabNavigator(
  {
    HomePage: {
      screen: HomePage
    },
    DiscoverPage: {
      screen: DiscoverPage
    },
    ProfilePage: {
      screen: ProfilePage
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return <Tabbar {...props} />;
    }
  }
);

const App = StackNavigator(
  {
    LoginPage: { screen: LoginPage },
    HomePage: { screen: Home }
  },
  {
    initialRouteName: "LoginPage",
    headerMode: "none"
  }
);

export default () => (
  <Root>
    <App />
  </Root>
);
