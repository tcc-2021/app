import * as React from "react";
import { StyleSheet, ScrollView, Button } from "react-native";
import { View, Text } from "native-base";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Materias from "./Materias.js";
import PaginaSimulado from "./PaginaSimulado.js";
import IconFooter from "./Footer.js";

import { navigationRef } from "./RootNavigation";

const Stack = createStackNavigator();

export default function PaginaInicial() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Simulado">
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Materias"
                    component={Materias}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Simulado"
                    component={PaginaSimulado}
                />
            </Stack.Navigator>
            <IconFooter></IconFooter>
        </NavigationContainer>
    );
}
