import React, { Component } from "react";

import { StyleSheet, Dimensions, Alert } from "react-native";

import {
    Container,
    Header,
    Content,
    Button,
    ListItem,
    Text,
    Icon,
    Left,
    Body,
    Right,
    Switch,
} from "native-base";

import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = [
    {
        name: "Não feitas",
        population: 120,
        color: "#DE9D98",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "Feitas",
        population: 50,
        color: "#F16459",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
];

const dataPt = [
    {
        name: "Não feitas",
        population: 57,
        color: "#DE9D98",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "Feitas",
        population: 123,
        color: "#F16459",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
];

const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16,
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726",
    },
};

import * as SecureStore from "expo-secure-store";

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

import * as RootNavigation from "./RootNavigation.js";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PaginaAlterarEmail from "./PaginaAlterarEmail.js"

const Stack = createStackNavigator();

export default class ListIconExample extends Component {
    alterarEmail() {
        RootNavigation.navigate("AlterarEmail");
    }

    alterarSenha() {
        RootNavigation.navigate("AlterarSenha");
    }
    excluirConta() {}
    logout() {
        save("email", "");
        save("senha", "");
        this.props.handler(false, "");
    }
    confirmacao() {
        Alert.alert("Sair", "Tem certeza que deseja sair?",
        [
            {text: "Sim", onPress: () => this.logout()}, {text: "Não"}
        ]
        );
    }
    
    render() {
        return (
            <Container>
                <Content style={{ paddingTop: 10 }}>
                    <ListItem icon onPress={() => this.alterarEmail()}>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="mail" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Alterar e-mail</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={this.alterarSenha.bind(this)}>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="key" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Alterar senha</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={this.excluirConta.bind(this)}>
                        <Left>
                            <Button style={{ backgroundColor: "#F33C2D" }}>
                                <Icon active name="close" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Excluir conta</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={this.confirmacao.bind(this)}>
                        <Left>
                            <Button style={{ backgroundColor: "#DC143C" }}>
                                <Icon active name="remove" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Logout</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <Text style={styles.atividadeTitulo}>
                        Questões de Matemática
                    </Text>
                    <PieChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[10, 0]}
                        absolute
                    />
                    <Text style={styles.atividadeTitulo}>
                        Questões de Português
                    </Text>
                    <PieChart
                        data={dataPt}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[10, 0]}
                        absolute
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    atividadeTitulo: {
        fontFamily: "Lato",
        fontSize: 25,
        textAlign: "center",
        marginTop: 20,
    },
});
