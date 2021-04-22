import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";

class IconHeader extends Component {
  render() {
    return (
      <Container style={styles.container}>

        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{marginLeft: -100}}>
            <Title> Studiis </Title>
          </Body>
        </Header>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginBottom: 60
  }
});

export default IconHeader;