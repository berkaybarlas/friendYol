import * as React from "react";
import { Keyboard } from "react-native";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
export interface Props {}
export interface State {
  isVisible: Boolean;
}
export default class Tabbar extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.keyboardWillShow = this.keyboardWillShow.bind(this);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);

    this.state = { isVisible: true };
  }

  componentWillMount() {
    this.props.navigation.navigate("AllCoinsPage");
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow(event) {
    this.setState({ isVisible: false });
  }

  keyboardWillHide(event) {
    this.setState({ isVisible: true });
  }

  render() {
    const props = this.props;
    return this.state.isVisible ? (
      <Footer>
        <FooterTab>
          <Button
              style={{color: "#F27A1A"}}
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("HomePage")}
          >
            <Icon style={{color: "#F27A1A"}} name="paper" />
            <Text>Ana Sayfa</Text>
          </Button>
          <Button
              style={{color: "#F27A1A"}}
            vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate("DiscoverPage")}
          >
            <Icon style={{color: "#F27A1A"}} name="bowtie" />
            <Text>Keşfet</Text>
          </Button>
          <Button
              style={{color: "#F27A1A"}}
            vertical
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate("ProfilePage")}
          >
            <Icon style={{color: "#F27A1A"}} name="person" />
            <Text>Profilim</Text>
          </Button>
        </FooterTab>
      </Footer>
    ) : null;
  }
}
