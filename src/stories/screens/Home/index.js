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
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";
import CardImage from "../../../common/components/CardImage";
import styles from "./styles";
export interface Props {
  navigation: any;
  feed: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    console.log("Orders", this.props.feed);
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {this.props.feed.map((item, i) => (
              <ListItem key={i}>
                <CardImage
                  item={{
                    userName: item.userFullName,
                    productName: item.product.product.name,
                    imageUrl:
                      "https://img-trendyol.mncdn.com" +
                      item.product.product.bigImageList[0]
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
