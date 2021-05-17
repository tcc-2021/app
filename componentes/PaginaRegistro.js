import React, { Component } from "react";
import { StyleSheet, TextInput, Image } from "react-native";
import {
    Container,
    Content,
    Button,
    Item,
    Label,
    Input,
    Form,
    Text,
    Icon,
    View,
} from "native-base";

import { StackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";

import * as RootNavigation from "./RootNavigation";

import * as SecureStore from "expo-secure-store";
async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}
async function getValueFor(key) {
    return await SecureStore.getItemAsync(key);
}

export default class PaginaRegistro extends React.Component {
    registrarUsuario = async () => {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (
            (this.email != "" || this.nome != "" || this.senha != "") &&
            re.test(this.email.toLocaleLowerCase())
        ) {
            fetch(
                "https://studiistcc.000webhostapp.com/php/cadastro_mobile.php",
                {
                    method: "post",
                    header: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        nome: this.nome,
                        email: this.email,
                        senha: this.senha,
                    }),
                }
            )
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson === 0) {
                        save("email", this.email);
                        save("senha", this.senha);

                        console.log(getValueFor("senha"));
                        this.props.handler(true, this.email);
                    } else {
                        alert(responseJson);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            alert("Verifique seus dados.");
        }
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content style={{ marginTop: 50 }}>
                    <Image
                        source={require("../assets/contorno1px-logo-medium.png")}
                        style={{ height: 67, width: 192, alignSelf: "center" }}
                    ></Image>

                    <Text style={styles.titleLogin}> Registre-se </Text>

                    <Form>
                        <View style={styles.inputIndividual}>
                            <LinearGradient
                                colors={["#7c32ff", "#c738d8"]}
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 0.0 }}
                                style={styles.gradient}
                            >
                                <View style={styles.innerViewHack}>
                                    <Icon
                                        active
                                        name="person-circle-outline"
                                        style={{ left: 10, top: 5 }}
                                    />
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        placeholder="Nome"
                                        style={styles.arrendodadoIn}
                                        onChangeText={(nome) =>
                                            (this.nome = nome)
                                        }
                                    />
                                </View>
                            </LinearGradient>
                        </View>

                        <View style={styles.inputIndividual}>
                            <LinearGradient
                                colors={["#7c32ff", "#c738d8"]}
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 0.0 }}
                                style={styles.gradient}
                            >
                                <View style={styles.innerViewHack}>
                                    <Icon
                                        active
                                        name="mail-outline"
                                        style={{ left: 10, top: 5 }}
                                    />
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        placeholder="Email"
                                        style={styles.arrendodadoIn}
                                        onChangeText={(email) =>
                                            (this.email = email)
                                        }
                                    />
                                </View>
                            </LinearGradient>
                        </View>

                        <View style={styles.inputIndividual}>
                            <LinearGradient
                                colors={["#7c32ff", "#c738d8"]}
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 0.0 }}
                                style={styles.gradient}
                            >
                                <View style={styles.innerViewHack}>
                                    <Icon
                                        active
                                        name="key-outline"
                                        style={{ left: 10, top: 5 }}
                                    />
                                    {/*<Label style={styles.lbl}>Password</Label>*/}
                                    <TextInput
                                        underlineColorAndroid={"transparent"}
                                        secureTextEntry
                                        placeholder="Senha"
                                        style={styles.arrendodadoIn}
                                        onChangeText={(senha) =>
                                            (this.senha = senha)
                                        }
                                    />
                                </View>
                            </LinearGradient>
                        </View>
                    </Form>

                    <LinearGradient
                        colors={["#7c32ff", "#c738d8"]}
                        start={{ x: 0.0, y: 1.0 }}
                        end={{ x: 1.0, y: 0.0 }}
                        style={{
                            margin: 20,
                            marginTop: 30,
                            padding: -3,
                            borderRadius: 2,
                        }}
                    >
                        <Button
                            block
                            style={{
                                backgroundColor: "transparent",
                                top: -1,
                                shadowColor: "#DDD",
                                shadowOffset: 3,
                                shadowRadius: 2,
                            }}
                            onPress={this.registrarUsuario}
                        >
                            <Text> Registrar </Text>
                        </Button>
                    </LinearGradient>

                    <Button block style={styles.btn}>
                        <Image
                            source={require("../assets/google-logo.png")}
                            style={{ height: 30, width: 30 }}
                        ></Image>
                        <Text style={{ color: "#0665eb" }}>
                            Entrar usando o Google
                        </Text>
                    </Button>
                    {/*<View style={{ flex: 1, flexDirection: "row" }}>*/}
                    <Button
                        block
                        style={[styles.btn, { borderColor: "#7c32ff" }]}
                        onPress={() => {
                            this.props.navigation.navigate("Login");
                        }}
                    >
                        <Text style={{ color: "#7c32ff" }}> Login </Text>
                    </Button>

                    {/*</View>*/}

                    <Image
                        source={require("../assets/fundo-login.png")}
                        style={{
                            width: 325,
                            height: 123,
                            alignSelf: "flex-end",
                        }}
                    ></Image>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
    },
    titleLogin: {
        fontFamily: "Lato",
        textAlign: "center",
        fontSize: 30,
        marginTop: 40,
    },
    arrendodadoIn: {
        borderRadius: 20,
        color: "black",
        width: "90%",
        flex: 0,
        marginLeft: 20,
        bottom: 25,
        left: 25,
        fontSize: 16,
        position: "relative",
    },
    lbl: {
        color: "black",
        position: "relative",
        flex: 0,
    },
    inputIndividual: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: "#FFF",
        width: "90%",
        top: 20,
        height: 50,
    },
    gradient: {
        borderRadius: 30,
    },
    innerViewHack: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        marginTop: 6,
        marginRight: 1,
        marginBottom: -4,
        marginLeft: 1,

        top: -5,
        height: 40,
    },
    btn: {
        margin: 20,
        marginTop: 0,
        borderColor: "#0665eb",
        borderWidth: 1,
        backgroundColor: "#FFF",
    },
    meioBloco: {
        margin: 20,
        marginTop: 0,
        width: "40%",
        backgroundColor: "#FFF",
        borderWidth: 1,
    },
});
