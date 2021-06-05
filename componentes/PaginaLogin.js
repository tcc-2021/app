import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    Image,
    KeyboardAvoidingView,
    Dimensions,
} from "react-native";
import { Container, Button, Form, Text, Icon, View } from "native-base";

import * as SecureStore from "expo-secure-store";

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

        loginUsuarioRemoto(this.email, this.senha).then((correto) => {
            if (correto) {
                this.props.handler(1, this.email);
                this.store("userEmail", this.email);
            } else {
                alert("Seu e-mail ou senha estão errados ou são inválidos.");
            }
        });
    }

    async store(name, content) {
        try {
            await SecureStore.setItemAsync(name, JSON.stringify(content));
        } catch (error) {
            console.log("Something went wrong on PaginaLogin store", error);
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <KeyboardAvoidingView
                    behavior={"height"}
                    style={{ marginTop: 50, flex: 1 }}
                >
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

                    <Button
                        block
                        style={[styles.googleBtn, { borderColor: "#7c32ff" }]}
                        onPress={() => {
                            this.props.navigation.navigate("Registro");
                        }}
                    >
                        <Text style={{ color: "#7c32ff" }}>Registre-se</Text>
                    </Button>
                </KeyboardAvoidingView>
                <Image
                    source={require("../assets/fundo-login.png")}
                    style={styles.imagemPretensiosa}
                ></Image>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        minHeight: Dimensions.get("window").height,
        flex: 1,
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
    imagemPretensiosa: {
        width: 325,
        height: 123,
        position: "absolute",
        alignSelf: "flex-end",
        bottom: 0,
    },
});
