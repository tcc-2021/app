import * as React from "react";
import { StyleSheet, ScrollView, Button } from "react-native";
import { View, Text } from "native-base";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PaginaExercicios from "./PaginaExercicios.js";
import PaginaSimulado from "./PaginaSimulado.js";
import PaginaBiblioteca from "./PaginaBiblioteca.js";
import PaginaPerfil from "./PaginaPerfil.js";

import PaginaLogin from "./PaginaLogin";
import PaginaRegistro from "./PaginaRegistro";

import IconFooter from "./Footer.js";

import { navigationRef } from "./RootNavigation";

import * as SecureStore from "expo-secure-store";

const Stack = createStackNavigator();

export default class PaginaInicial extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            isLoggedIn: true,
            userEmail: "aa@aa.aa",
        };
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
                            options={{ headerShown: false }}
                            name="Exercicios"
                            component={PaginaExercicios}
                        />
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Simulado"
                            component={PaginaSimulado}
                        />
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Biblioteca"
                            component={PaginaBiblioteca}
                        />
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Perfil"
                        >
                            {(props) => (
                                <PaginaPerfil
                                    {...props}
                                    handler={this.handler}
                                    userEmail={this.state.userEmail}
                                />
                            )}
                        </Stack.Screen>
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
}
