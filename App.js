import React from "react";
import AppLoading from "expo-app-loading";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { View, LogBox } from "react-native";

import PaginaInicial from "./componentes/PaginaInicial";
import PaginaRegistro from "./componentes/PaginaRegistro";
import PaginaLogin from "./componentes/PaginaLogin";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
        LogBox.ignoreLogs([
            "Non-serializable values were found in the navigation state",
        ]);
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Lato: require("./assets/fonts/Lato/Lato-Regular.ttf"),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render() {
        // useScreens();
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return <PaginaInicial />;
    }
}
