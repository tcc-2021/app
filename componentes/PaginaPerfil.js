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

import { deletarContaServidor, baixarEstatisticas } from "./AcoesRemotas";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16,
    },
};

import * as SecureStore from "expo-secure-store";

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export default class ListIconExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dadosPt: [],
            dadosMa: [],
            dadosHi: [],
            dadosGe: [],
            dadosFi: [],
            dadosQu: [],
            dadosBi: [],
            dadosIn: [],
        };
    }

    componentDidMount() {
        baixarEstatisticas(this.props.userEmail).then((jsonServidor) => {
            console.log(jsonServidor);
            this.setState({
                dadosPt: [
                    {
                        name: "Erros",
                        number: parseInt(
                            jsonServidor["portugues"]["erros"],
                            10
                        ),
                        color: "#F16459",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                    {
                        name: "Acertos",
                        number: parseInt(
                            jsonServidor["portugues"]["acertos"],
                            10
                        ),
                        color: "#DE9D98",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                ],
                dadosMa: [
                    {
                        name: "Acertos",
                        number: parseInt(
                            jsonServidor["matematica"]["acertos"],
                            10
                        ),
                        color: "#DE9D98",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                    {
                        name: "Erros",
                        number: parseInt(
                            jsonServidor["matematica"]["erros"],
                            10
                        ),
                        color: "#F16459",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                ],
                dadosHi: [
                    {
                        name: "Acertos",
                        number: parseInt(
                            jsonServidor["historia"]["acertos"],
                            10
                        ),
                        color: "#DE9D98",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                    {
                        name: "Erros",
                        number: parseInt(jsonServidor["historia"]["erros"], 10),
                        color: "#F16459",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                ],
                dadosGe: [
                    {
                        name: "Acertos",
                        number: parseInt(
                            jsonServidor["geografia"]["acertos"],
                            10
                        ),
                        color: "#DE9D98",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                    {
                        name: "Erros",
                        number: parseInt(
                            jsonServidor["geografia"]["erros"],
                            10
                        ),
                        color: "#F16459",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                ],
                dadosFi: [
                    {
                        name: "Acertos",
                        number: parseInt(jsonServidor["fisica"]["acertos"], 10),
                        color: "#DE9D98",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                    {
                        name: "Erros",
                        number: parseInt(jsonServidor["fisica"]["erros"], 10),
                        color: "#F16459",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                ],
                dadosQu: [
                    {
                        name: "Acertos",
                        number: parseInt(
                            jsonServidor["quimica"]["acertos"],
                            10
                        ),
                        color: "#DE9D98",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                    {
                        name: "Erros",
                        number: parseInt(jsonServidor["quimica"]["erros"], 10),
                        color: "#F16459",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                ],
                dadosBi: [
                    {
                        name: "Acertos",
                        number: parseInt(
                            jsonServidor["biologia"]["acertos"],
                            10
                        ),
                        color: "#DE9D98",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                    {
                        name: "Erros",
                        number: parseInt(jsonServidor["biologia"]["erros"], 10),
                        color: "#F16459",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                ],
                dadosIn: [
                    {
                        name: "Acertos",
                        number: parseInt(jsonServidor["ingles"]["acertos"], 10),
                        color: "#DE9D98",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                    {
                        name: "Erros",
                        number: parseInt(jsonServidor["ingles"]["erros"], 10),
                        color: "#F16459",
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 17,
                    },
                ],
            });
        });
    }

    alterarEmail() {
        this.props.navigation.navigate("AlterarEmail", {
            handler: this.props.handler,
        });
    }

    alterarSenha() {
        this.props.navigation.navigate("AlterarSenha", {
            handler: this.props.handler,
            email: this.props.userEmail,
        });
    }

    excluirConta() {
        Alert.alert(
            "Tem certeza que deseja excluir sua conta?",
            "Esta ação é irreversível.",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: () =>
                        deletarContaServidor(
                            this.props.handler,
                            this.props.userEmail
                        ),
                },
            ]
        );
    }

    logout() {
        save("email", "");
        save("senha", "");
        this.props.handler(false, "");
    }

    confirmacao() {
        Alert.alert("Sair", "Tem certeza que deseja sair?", [
            { text: "Cancelar", style: "cancel" },
            { text: "Sim", onPress: () => this.logout() },
        ]);
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
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
                        Questões de Português
                    </Text>
                    <PieChart
                        data={this.state.dadosPt}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"number"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[10, 0]}
                        absolute
                    />
                    <Text style={styles.atividadeTitulo}>
                        Questões de Matemática
                    </Text>
                    <PieChart
                        data={this.state.dadosMa}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"number"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[10, 0]}
                        absolute
                    />
                    <Text style={styles.atividadeTitulo}>
                        Questões de História
                    </Text>
                    <PieChart
                        data={this.state.dadosHi}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"number"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[10, 0]}
                        absolute
                    />

                    <Text style={styles.atividadeTitulo}>
                        Questões de Geografia
                    </Text>
                    <PieChart
                        data={this.state.dadosGe}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"number"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[10, 0]}
                        absolute
                    />
                    <Text style={styles.atividadeTitulo}>
                        Questões de Física
                    </Text>
                    <PieChart
                        data={this.state.dadosFi}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"number"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[10, 0]}
                        absolute
                    />
                    <Text style={styles.atividadeTitulo}>
                        Questões de Química
                    </Text>
                    <PieChart
                        data={this.state.dadosQu}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"number"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[10, 0]}
                        absolute
                    />
                    <Text style={styles.atividadeTitulo}>
                        Questões de Biologia
                    </Text>
                    <PieChart
                        data={this.state.dadosBi}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"number"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[10, 0]}
                        absolute
                    />
                    <Text style={styles.atividadeTitulo}>
                        Questões de Inglês
                    </Text>
                    <PieChart
                        data={this.state.dadosIn}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"number"}
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
    content: {
        paddingTop: 10,
    },
});
