import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Form,
  Item,
  Label,
  View,
  Thumbnail
} from "native-base";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";
import DiscoverCard from "../../../common/components/DiscoverCard";
import SearchBar from "react-native-search-bar";
export interface Props {
  navigation: any;
  influencers: any;
  follow: Function;
  userId: number;
}

export default class Discover extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    let leftItems = [],
      rightItems = [];
    this.props.influencers.map((item, index) => {
      if (index % 2 == 0) {
        leftItems.push(
          <ListItem key={index}>
            <DiscoverCard
              item={{
                userName: item.fullName,
                followerNumber: item.followerCount,
                imageUrl: ""
              }}
              userId={item.userId}
              follow={this.props.follow}
            />
          </ListItem>
        );
      } else {
        rightItems.push(
          <ListItem key={index}>
            <DiscoverCard
              item={{
                userName: item.fullName,
                followerNumber: item.followerCount,
                imageUrl: ""
              }}
              userId={item.userId}
              follow={this.props.follow}
            />
          </ListItem>
        );
      }
    });
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Keşfet</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ backgroundColor: "#D2D2D2" }}>
          {<SearchBar
            heigth="60"
            ref="searchBar"
            placeholder="Search"
            barTintColor="#FFFFFF"
            textFieldBackgroundColor="#F5F5F5"
            tintColor="#F27A1A"
            textColor="#F27A1A"
            onChangeText={val => {}}
            onSearchButtonPress={val => {}}
            onCancelButtonPress={val => {}}
          />}
        </View>

        <Content>
          <View style={{ flexDirection: "row" }}>
            <List style={{ flex: 1 }}>{leftItems}</List>
            <List style={{ flex: 1 }}>{rightItems}</List>
          </View>
        </Content>
      </Container>
    );
  }
}
