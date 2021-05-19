import * as React from "react";
import { StyleSheet, ScrollView, Button } from "react-native";
import { View, Text } from "native-base";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PaginaExercicios from "./PaginaExercicios.js";
import PaginaSimulado from "./PaginaSimulado.js";
import PaginaBiblioteca from "./PaginaBiblioteca.js";
import PaginaPerfil from "./PaginaPerfil.js";
import PaginaAlterarEmail from "./PaginaAlterarEmail.js";
import PaginaAlterarSenha from "./PaginaAlterarSenha.js";

import PaginaLogin from "./PaginaLogin";
import PaginaRegistro from "./PaginaRegistro";

import IconFooter from "./Footer.js";

import { navigationRef } from "./RootNavigation";

import * as SecureStore from "expo-secure-store";

const Stack = createStackNavigator();

async function getValueFor(key) {
    return await SecureStore.getItemAsync(key);
}

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export default class PaginaInicial extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);

        let email = getValueFor("email");
        let senha = getValueFor("senha");
        console.log("" + email);
        console.log("" + senha);
        if (email && senha) {
            if (this.checkDados(email, senha)) {
                console.log("dados ok");
                this.state = { isLoggedIn: true, userEmail: email };
            } else {
                save("email", "");
                save("senha", "");
                this.state = { isLoggedIn: true, userEmail: "" };
            }
        } else {
            this.state = { isLoggedIn: true, userEmail: "" };
        }
    }

    handler(logade, email) {
        this.setState({
            isLoggedIn: logade,
            userEmail: email,
        });
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator initialRouteName="Simulado">
                        <Stack.Screen
                            //options={{ headerShown: false }}
                            name="Exercicios"
                            component={PaginaExercicios}
                        />
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Simulado"
                            component={PaginaSimulado}
                        />
                        <Stack.Screen
                            //options={{ headerShown: false }}
                            name="Biblioteca"
                            component={PaginaBiblioteca}
                        />
                        <Stack.Screen options={{title: "Configurações do perfil"}}
                            //options={{ headerShown: false }}
                            name="Perfil"
                        >
                            {(props) => (
                                <PaginaPerfil
                                    {...props}
                                    handler={this.handler}
                                />
                            )}
                        </Stack.Screen>

                        <Stack.Screen options={{title: "Configurações"}}
                        	name="AlterarEmail"
                        	component={PaginaAlterarEmail}
                        />

                        <Stack.Screen options={{title: "Configurações"}}
                        	name="AlterarSenha"
                        	component={PaginaAlterarSenha}
                        />
                    </Stack.Navigator>
                    <IconFooter></IconFooter>
                </NavigationContainer>
            );
        }
        return (
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen options={{ headerShown: false }} name="Login">
                        {(props) => (
                            <PaginaLogin {...props} handler={this.handler} />
                        )}
                    </Stack.Screen>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Registro"
                    >
                        {(props) => (
                            <PaginaRegistro {...props} handler={this.handler} />
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    checkDados(email, senha) {
        fetch("https://studiistcc.000webhostapp.com/php/login_mobile.php", {
            method: "post",
            header: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 0) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
