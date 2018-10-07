// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";

import Login from "../../stories/screens/Login";
import { login, saveToken } from "./actions";
import { StackActions, NavigationActions } from "react-navigation";

export interface Props {
  navigation: any;
  login: Function;
  isLogged: boolean;
  isLoading: boolean;
  token: string;
  saveToken: Function;
}
export interface State {}
class LoginForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.navigateToHome = this.navigateToHome.bind(this);
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem("token");
    console.log("login token", token);
    if (token != null) {
      this.props.saveToken(token);
      this.navigateToHome();
    }
  }

  login(username, password) {
    this.props.login(username, password);
  }

  navigateToHome() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "HomePage" })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    console.log("Rerender", this.props.isLogged);
    if (this.props.isLogged) {
      this.navigateToHome();
    } else {
      console.log("Else", this.props.token);
      if (this.props.token === "-") {
        console.log("Empty token");
        alert("Kullanıcı adı veya şifreniz hatalıdır");
      }
    }
    return (
      <Login
        navigation={this.props.navigation}
        onLogin={this.login.bind(this)}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    login: (username, password) => dispatch(login(username, password)),
    saveToken: token => dispatch(saveToken(token))
  };
}

const mapStateToProps = state => ({
  isLogged: state.loginReducer.isLogged,
  token: state.loginReducer.token,
  isLoading: state.loginReducer.isLoading
});

export default connect(
  mapStateToProps,
  bindAction
)(LoginForm);
