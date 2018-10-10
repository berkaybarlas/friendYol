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
  Thumbnail,
  Tabs,
    TabHeading,
  Tab
} from "native-base";

import styles from "./styles";
import ProfileCard from "../../../common/components/ProfileCard";

const lists = [
  "https://img-trendyol.mncdn.com/mnresize/415/622/Assets/ProductImages/oa/67/3488887/1/8433885121027_1_org_zoom.jpg",
  "https://img-trendyol.mncdn.com/mnresize/415/622/Assets/ProductImages/oa/67/3482506/1/8433885567955_1_org_zoom.jpg",
  "https://img-trendyol.mncdn.com/mnresize/415/622/Assets/ProductImages/oa/67/3488620/1/8433885492820_1_org_zoom.jpg"
];

export interface Props {
  navigation: any;
  user: any;
  followings: Array<Object>;
  followers: Array<Object>;
  orders: Array<Object>;
  myFavorites: Array<Object>;
}
export default class Profile extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    let orders = [],
      myFavorites = [];
    console.log(this.props.myFavorites);
    if ((this.props.orders !== undefined) & (this.props.orders !== null)) {
      this.props.orders.map((item, i) => {
        orders.push(
          <ListItem key={i}>
            <ProfileCard
              item={{
                productName: item.shipments[0].products[0].name,
                imageUrl:
                  "https://testcdn.trendyol.com" +
                  item.shipments[0].products[0].images[0].url.replace("~", "")
              }}
            />
          </ListItem>
        );
      });
    }
    if (
      (this.props.myFavorites !== null) &
      (this.props.myFavorites !== undefined)
    ) {
      this.props.myFavorites.map((item, i) => {
        myFavorites.push(
          <ListItem key={i}>
            <ProfileCard
              item={{
                productName: item.product.product.name,
                imageUrl:
                  "https://img-trendyol.mncdn.com" +
                  item.product.product.bigImageList[0]
              }}
            />
          </ListItem>
        );
      });
    }
    return (
      <Container style={styles.container}>
        <Header hasTabs>
          <Left />
          <Body>
            <Title>Profilim</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.profileContainer}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Thumbnail
                large
                style={{}}
                source={require("../../../../Assets/images/profile.png")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.profileNumbers}>
                {this.props.followings.length}
              </Text>
              <Label style={styles.profileText}>Takip Edilen</Label>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.profileNumbers}>
                {this.props.followers.length}
              </Text>
              <Label style={styles.profileText}>Takipçi</Label>
            </View>
          </View>
          <Title style={styles.userName}>
            {this.props.user != null
              ? this.props.user.FirstName + " " + this.props.user.LastName
              : ""}
          </Title>
          <View style={{ backgroundColor: "#D8D8D8", height: 2, flex: 1 }} />
          <Tabs>
            <Tab heading={"Favoriler"}>{myFavorites}</Tab>
            <Tab heading={"Satın Aldıklarım"}>{orders}</Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
