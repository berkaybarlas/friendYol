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
export default class CardImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    // noinspection JSAnnotator
    return (
      <Card>
        <CardItem style={{ flex: 1, flexDirection: "row" }}>
          <Left>
            <Thumbnail source={require("../../../Assets/images/profile.png")} />
            <Body>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>{props.item.userName}</Text>
                <Icon
                  active
                  style={{ color: "#F27A1A", fontSize: 30 }}
                  name="md-heart"
                />
              </View>
              <Text>{props.item.productName} ürününü beğendi.</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: props.item.imageUrl }}
            style={{ height: 480, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem  >
          <Left>
            <Button transparent onPress={() => {
                alert(props.item.productName + " ürünü sepetine ekledin.");
            }}>
              <Icon
                active
                style={{ color: "#F27A1A", fontSize: 30 }}
                name="md-basket"
              />

              <Text style={{ color: "#000000" }}>Ürününü Sepetine Ekle</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon
                active
                style={{ color: "#F27A1A", fontSize: 30, marginLeft: 25 }}
                name="ios-share-alt"
              />
              <Text style={{ color: "#000000" }}>Ürüne Git</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
