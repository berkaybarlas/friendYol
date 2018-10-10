import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";
import { AppRegistry, View, Image } from "react-native";

export default class DiscoverCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    console.log(this.props.userId);
    return (
      <Card style={{ flexDirection: "column", justifyItems: "center" }}>
        <Right>
          <CardItem>
            <Thumbnail
              large
              source={require("../../../Assets/images/profile.png")}
            />
          </CardItem>
        </Right>
        <Right>
          <CardItem>
            <View>
              <Title style={{ textAlign: "center" }}>
                {props.item.userName}
              </Title>
            </View>
          </CardItem>
        </Right>
        <Right>
          <CardItem>
            <Text style={{ color: "#000000", marginTop: "-10%" }}>
              Takipçi Sayısı
            </Text>
          </CardItem>
        </Right>
        <Right>
          <CardItem>
            <Text
              style={{
                color: "#000000",
                fontWeight: "bold",
                fontSize: 24,
                marginTop: "-10%"
              }}
            >
              {props.item.followerNumber}
            </Text>
          </CardItem>
        </Right>
        <Left>
          <CardItem>
            <Button
              transparent
              onPress={() => {
                  console.log(this.props);
                this.props.follow(props.userId);
                alert(props.item.userName + " takip etmeye başladın.");
              }}
            >
              <Icon
                active
                style={{ color: "#F27A1A", fontSize: 40, marginTop: "-25%" }}
                name="ios-heart"
              />
            </Button>
          </CardItem>
        </Left>
      </Card>
    );
  }
}
