import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";


class CardGeo extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          
          <Card style={styles.mb}>

            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontSize: 22}}> Geografia </Text>
                </Body>
              </Left>
            </CardItem>

          </Card>
          
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 250
  },
  mb: {
    marginBottom: 15
  }
});

export default CardGeo;