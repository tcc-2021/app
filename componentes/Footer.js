import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Footer,
    FooterTab,
    Body,
    Left,
    Right,
    Icon,
    Text,
} from "native-base";

import * as RootNavigation from "./RootNavigation";

import temas from "../temas-native-base/Tema.js";

import { useNavigation } from "@react-navigation/native";

export default function IconFooter(props) {
    const [routeName, setRouteName] = React.useState("Simulado");

    React.useEffect(() => {
        props.navigationRef.current?.addListener("state", (e) => {
            setRouteName(props.navigationRef.current?.getCurrentRoute().name);
        });
    });

    return (
        <View>
            <Content padder />

            <Footer>
                <FooterTab theme={temas} style={{ backgroundColor: "#7c32ff" }}>
                    <Button
                        active={routeName == "Exercicios"}
                        onPress={() =>
                            props.navigationRef.current?.navigate("Exercicios")
                        }
                        style={{ backgroundColor: "#7c32ff" }}
                        vertical
                    >
                        <Icon active={routeName == "Exercicios"} name="book" />
                        <Text style={{ fontSize: 10 }}>Exercícios</Text>
                    </Button>
                    <Button
                        active={routeName == "Biblioteca"}
                        onPress={() =>
                            props.navigationRef.current?.navigate("Biblioteca")
                        }
                        style={{ backgroundColor: "#7c32ff" }}
                        vertical
                    >
                        <Icon
                            active={routeName == "Biblioteca"}
                            name="library"
                        />
                        <Text style={{ fontSize: 10 }}>Biblioteca</Text>
                    </Button>
                    <Button
                        active={routeName == "Simulado"}
                        onPress={() =>
                            props.navigationRef.current?.navigate("Simulado")
                        }
                        style={{ backgroundColor: "#7c32ff" }}
                        vertical
                    >
                        <Icon
                            active={routeName == "Simulado"}
                            name="trending-up"
                        />
                        <Text style={{ fontSize: 10 }}>Simulado</Text>
                    </Button>
                    <Button
                        active={routeName == "Perfil"}
                        onPress={() =>
                            props.navigationRef.current?.navigate("Perfil")
                        }
                        style={{ backgroundColor: "#7c32ff" }}
                        vertical
                    >
                        <Icon
                            active={routeName == "Perfil"}
                            name="person-circle-outline"
                        />
                        <Text style={{ fontSize: 10 }}>Perfil</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </View>
    );
}
