import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
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

import { LinearGradient } from "expo-linear-gradient";

export default function PaginaLogin() {
    return (
        <Container style={styles.container}>
            <Text style={styles.titleLogin}>Login</Text>
            <Content>
                <Form>
                    <View style={styles.inputIndividual}>
                        <LinearGradient
                            colors={["#FF00FF", "#00FFFF"]}
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
                                />
                            </View>
                        </LinearGradient>
                    </View>

                    <View style={styles.inputIndividual}>
                        <LinearGradient
                            colors={["#FF00FF", "#00FFFF"]}
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 0.0 }}
                            style={styles.gradient}
                        >
                            <View style={styles.innerViewHack}>
                                <Icon
                                    active
                                    name="warning-outline"
                                    style={{ left: 10, top: 5 }}
                                />
                                {/*<Label style={styles.lbl}>Password</Label>*/}
                                <TextInput
                                    underlineColorAndroid={"transparent"}
                                    secureTextEntry
                                    placeholder="Senha"
                                    style={styles.arrendodadoIn}
                                />
                            </View>
                        </LinearGradient>
                    </View>
                </Form>

                <Button block style={{ margin: 15, marginTop: 50 }}>
                    <Text>Sign In</Text>
                </Button>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginTop: 60,
    },
    titleLogin: {
        fontFamily: "Lato",
        textAlign: "center",
        fontSize: 30,
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
        marginTop: 7,
        marginRight: 2,
        marginBottom: -3,
        marginLeft: 2,

        top: -5,
        height: 40,
    },
});
