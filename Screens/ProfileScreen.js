import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t1.0-9/70859446_1330098477164146_8531363087897329664_o.jpg?_nc_cat=111&_nc_oc=AQljnIDiHnPbeFrW5Z6VoR4_PGqxSGSVDJAWA4Z1sQj2u0Rkx-SUJZL50aoaBn06jhk&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=7ec26abc80fd7ed51bd736e5d7b3f312&oe=5E6578D0' }}/>
                <Body>
                  <Text>Sokphal Adam</Text>
                  <Text note>@adam</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text>I want to confess to everybody that i have small dick, very small.</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/2.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}