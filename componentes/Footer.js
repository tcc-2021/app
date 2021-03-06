import * as React from "react";
import { View } from "react-native";
import { Content, Button, Footer, FooterTab, Icon, Text } from "native-base";

import temas from "../temas-native-base/Tema.js";

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
                        active={
                            routeName == "Exercicios" ||
                            routeName == "RenderExercicio"
                        }
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
                        active={
                            routeName == "Simulado" ||
                            routeName == "RenderSimulado"
                        }
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
