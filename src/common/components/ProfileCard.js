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
import { AppRegistry, View, Image } from 'react-native';
import types from "../types";
export default class CardImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
       // noinspection JSAnnotator
        return (
           <Card style={{ flexDirection: 'column'}} >
            <CardItem style={{flex: 1}}>
                <Left>
                    <Body>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text>{props.item.productName} {props.item.favorite ? "favorilerine ekledi.":"satın aldı."}</Text>
                        <Icon active style={{color: "#F27A1A", fontSize: 30}} name={props.item.favorite ? "md-heart":"cart"}  />
                    </View>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody style={{flex:1}}>
                <Image source={{uri:props.item.imageUrl}} style={{height: 480, width: null, flex:1}}/>
            </CardItem>
            <CardItem style={{flex:1}} onPress={() => {
                alert(props.item.productName + " ürünü sepetine ekledin.");
            }} >
                <Left>
                    <Button transparent >
                        <Icon active style={{color: "#F27A1A", fontSize: 30}} name={"md-basket"} />
                        <Text style={{color: "#000000"}}>Ürünü Sepetine Ekle</Text>
                    </Button>
                </Left>
                <Body>
                    <Button transparent>
                        <Icon active style={{color: "#F27A1A", fontSize: 30, marginLeft:25}} name="ios-share-alt" />
                        <Text style={{color: "#000000"}}>Ürüne Git</Text>
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
