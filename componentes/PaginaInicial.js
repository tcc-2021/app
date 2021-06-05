import * as React from "react";
import { View, Spinner } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PaginaExercicios from "./PaginaExercicios.js";
import RenderExercicio from "./RenderExercicio";
import PaginaSimulado from "./PaginaSimulado.js";
import RenderSimulado from "./RenderSimulado.js";
import PaginaBiblioteca from "./PaginaBiblioteca.js";
import PaginaPerfil from "./PaginaPerfil.js";
import PaginaAlterarEmail from "./PaginaAlterarEmail.js";
import PaginaAlterarSenha from "./PaginaAlterarSenha.js";

import PaginaLogin from "./PaginaLogin";
import PaginaRegistro from "./PaginaRegistro";

import IconFooter from "./Footer.js";

import * as SecureStore from "expo-secure-store";

export default class PaginaInicial extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        // isLoggedIn = 0 -> PaginaLogin
        // isLoggedIn = 1 -> PaginaExercicio
        // isLoggedIn = 2 -> Carregando
        this.state = {
            isLoggedIn: 2,
            userEmail: "",
        };
    }

    async readEmail() {
        try {
            const credenciais = await SecureStore.getItemAsync("userEmail");
            if (credenciais) {
                this.setState({
                    isLoggedIn: 1,
                    userEmail: JSON.parse(credenciais),
                });
            } else {
                this.setState({
                    isLoggedIn: 0,
                    userEmail: "",
                });
            }
        } catch (e) {
            console.log("Something went wrong on PaginaInicial read " + e);
        }
    }

    componentDidMount() {
        this.readEmail();
    }

    handler(logged, email) {
        console.log(logged);
        this.setState({
            isLoggedIn: logged,
            userEmail: email,
        });
    }

    render() {
        const Stack = createStackNavigator();
        const navigationRef = React.createRef();
        if (this.state.isLoggedIn == 0) {
            return (
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator initialRouteName="Login">
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Login"
                        >
                            {(props) => (
                                <PaginaLogin
                                    {...props}
                                    handler={this.handler}
                                />
                            )}
                        </Stack.Screen>
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Registro"
                        >
                            {(props) => (
                                <PaginaRegistro
                                    {...props}
                                    handler={this.handler}
                                />
                            )}
                        </Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            );
        } else if (this.state.isLoggedIn == 1) {
            return (
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator
                        initialRouteName="Exercicios"
                        screenOptions={{
                            headerTitleStyle: { fontFamily: "Lato" },
                        }}
                    >
                        <Stack.Screen
                            options={{ title: "Exercícios" }}
                            name="Exercicios"
                            component={PaginaExercicios}
                        />

                        <Stack.Screen
                            options={{ title: "Resolver Exercícios" }}
                            name="RenderExercicio"
                        >
                            {(props) => (
                                <RenderExercicio
                                    {...props}
                                    userEmail={this.state.userEmail}
                                />
                            )}
                        </Stack.Screen>

                        <Stack.Screen
                            options={{ title: "Simulado" }}
                            name="RenderSimulado"
                        >
                            {(props) => (
                                <RenderSimulado
                                    {...props}
                                    userEmail={this.state.userEmail}
                                />
                            )}
                        </Stack.Screen>

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
                        >
                            {(props) => (
                                <PaginaAlterarEmail
                                    {...props}
                                    userEmail={this.state.userEmail}
                                />
                            )}
                        </Stack.Screen>

                        <Stack.Screen
                            options={{ title: "Configurações" }}
                            name="AlterarSenha"
                            component={PaginaAlterarSenha}
                        />
                    </Stack.Navigator>
                    <IconFooter navigationRef={navigationRef}></IconFooter>
                </NavigationContainer>
            );
        } else {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Spinner color="purple" />
                </View>
            );
        }
    }
}
