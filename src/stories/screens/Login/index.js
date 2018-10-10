import * as React from "react";
import { Image, Platform } from "react-native";
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Form,
  Field,
  Item,
  Input
} from "native-base";
//import styles from "./styles";
export interface Props {
  loginForm: any;
  onLogin: Function;
}
export interface State {
  username: string;
  password: string;
}
class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#FFFFFF" }}>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: "flex-start" }}>
            <Title>Friendyol</Title>
          <View>
              <Image style={{marginTop:100,width: 350,height: 350}}
                  source={require('../../../../Assets/images/appIcon.png')}
              />
          </View>
          </Body>
        </Header>
        <Content>
          <Form style={{marginTop:200}}>
            <Item>
              <Input style={{color: "#F27A1A"}}
                onChangeText={value => {
                  this.setState({
                    username: value
                  });
                }}
                placeholder="Username"
              />
            </Item>
            <Item>
              <Input
                     secureTextEntry={true}
                onChangeText={value => {
                  this.setState({
                    password: value
                  });
                }}
                placeholder="Password"
              />
            </Item>
          </Form>
          <View padder>
            <Button
              block
              transparent
              onPress={() => {
                this.props.onLogin(this.state.username, this.state.password);
              }}
            >
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
