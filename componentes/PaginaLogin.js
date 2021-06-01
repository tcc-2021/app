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
    Root,
} from "native-base";

import { LinearGradient } from "expo-linear-gradient";

import { loginUsuarioRemoto } from "./AcoesRemotas";

export default class PaginaLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    loginUsuario() {
        if (this.email == "" || this.senha == "") {
            alert("Verifique seus dados.");
            return;
        }

        loginUsuarioRemoto(this.props.handler, this.email, this.senha);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content style={{ marginTop: 50 }}>
                    <Image
                        source={require("../assets/contorno1px-logo-medium.png")}
                        style={{ height: 67, width: 192, alignSelf: "center" }}
                    ></Image>
                    <Text style={styles.titleLogin}>Login</Text>
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
                            onPress={this.loginUsuario.bind(this)}
                        >
                            <Text>Entrar</Text>
                        </Button>
                    </LinearGradient>

                    <Button block style={styles.googleBtn}>
                        <Image
                            source={require("../assets/google-logo.png")}
                            style={{ height: 30, width: 30 }}
                        ></Image>
                        <Text style={{ color: "#0665eb" }}>
                            Entrar usando o Google
                        </Text>
                    </Button>
                    <Button
                        block
                        style={[styles.googleBtn, { borderColor: "#7c32ff" }]}
                        onPress={() => {
                            this.props.navigation.navigate("Registro");
                        }}
                    >
                        <Text style={{ color: "#7c32ff" }}>Registre-se</Text>
                    </Button>
                    <Image
                        source={require("../assets/fundo-login.png")}
                        style={{
                            width: 325,
                            height: 123,
                            position: "relative",
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
        height: "150%",
    },
    titleLogin: {
        fontFamily: "Lato",
        textAlign: "center",
        fontSize: 30,
        marginTop: 15,
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
    googleBtn: {
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
