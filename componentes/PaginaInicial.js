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

export default class PaginaInicial extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            isLoggedIn: true,
            userEmail: "aa@aa.aa",
            currPage: 0,
        };
    }

    handler(logade, email) {
        this.setState({
            isLoggedIn: logade,
            userEmail: email,
        });
    }

    render() {
        const Stack = createStackNavigator();
        const navigationRef = React.createRef();

        if (this.state.isLoggedIn) {
            return (
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator initialRouteName="Simulado">
                        <Stack.Screen
                            name="Exercicios"
                            component={PaginaExercicios}
                        />

                        <Stack.Screen
                            name="Biblioteca"
                            component={PaginaBiblioteca}
                        />
                        <Stack.Screen
                            name="Simulado"
                            component={PaginaSimulado}
                        />
                        <Stack.Screen
                            options={{ title: "Perfil" }}
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

                        <Stack.Screen
                            options={{ title: "Configurações" }}
                            name="AlterarEmail"
                            component={PaginaAlterarEmail}
                        />

                        <Stack.Screen
                            options={{ title: "Configurações" }}
                            name="AlterarSenha"
                            component={PaginaAlterarSenha}
                        />
                    </Stack.Navigator>
                    <IconFooter navigationRef={navigationRef}></IconFooter>
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
