import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import {
    Container,
    Header,
    Content,
    ListItem,
    CheckBox,
    Text,
    Body,
    View,
    Button,
    Icon,
} from "native-base";

import GradientButton from "react-native-gradient-buttons";

export default class PaginaSimulado extends Component {
    constructor(props) {
        super(props);
        {
            /* Mantém o estado das checkboxes selecionadas */
        }
        this.state = {
            portugues: true,
            matematica: true,
            biologia: true,
            geografia: true,
            fisica: true,
            quimica: true,
            ingles: true,
            historia: true,
            redacao: true,
        };
    }

    handleCheckboxes(mat) {
        switch (mat) {
            case 0:
                this.setState({ portugues: !this.state.portugues });
                break;
            case 1:
                this.setState({ matematica: !this.state.matematica });
                break;
            case 2:
                this.setState({ biologia: !this.state.biologia });
                break;
            case 3:
                this.setState({ geografia: !this.state.geografia });
                break;
            case 4:
                this.setState({ fisica: !this.state.fisica });
                break;
            case 5:
                this.setState({ quimica: !this.state.quimica });
                break;
            case 6:
                this.setState({ ingles: !this.state.ingles });
                break;
            case 7:
                this.setState({ historia: !this.state.historia });
                break;
            case 8:
                this.setState({ redacao: !this.state.redacao });
                break;
        }
    }

    render() {
        return (
            <Container>
                <ScrollView
                    style={{ marginTop: 13 }}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>
                        Selecione as matérias que deseja que estejam presentes
                        no simulado
                    </Text>
                    <ListItem onPress={() => this.handleCheckboxes(0)}>
                        <CheckBox
                            checked={this.state.portugues}
                            onPress={() => this.handleCheckboxes(0)}
                            color="#7c32ff"
                        />
                        <Body>
                            <Text style={styles.materia}>
                                <Icon active name="text"></Icon> | Português
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress={() => this.handleCheckboxes(1)}>
                        <CheckBox
                            checked={this.state.matematica}
                            onPress={() => this.handleCheckboxes(1)}
                            color="#7c32ff"
                        />
                        <Body>
                            <Text style={styles.materia}>
                                <Icon active name="calculator"></Icon> |
                                Matemática
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress={() => this.handleCheckboxes(2)}>
                        <CheckBox
                            checked={this.state.biologia}
                            onPress={() => this.handleCheckboxes(2)}
                            color="#7c32ff"
                        />
                        <Body>
                            <Text style={styles.materia}>
                                <Icon active name="bug"></Icon> | Biologia
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress={() => this.handleCheckboxes(3)}>
                        <CheckBox
                            checked={this.state.geografia}
                            onPress={() => this.handleCheckboxes(3)}
                            color="#7c32ff"
                        />
                        <Body>
                            <Text style={styles.materia}>
                                <Icon active name="earth-outline"></Icon> |
                                Geografia
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress={() => this.handleCheckboxes(4)}>
                        <CheckBox
                            checked={this.state.fisica}
                            onPress={() => this.handleCheckboxes(4)}
                            color="#7c32ff"
                        />
                        <Body>
                            <Text style={styles.materia}>
                                <Icon active name="logo-react"></Icon> | Física
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress={() => this.handleCheckboxes(5)}>
                        <CheckBox
                            checked={this.state.quimica}
                            onPress={() => this.handleCheckboxes(5)}
                            color="#7c32ff"
                        />
                        <Body>
                            <Text style={styles.materia}>
                                <Icon active name="beaker"></Icon> | Química
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress={() => this.handleCheckboxes(6)}>
                        <CheckBox
                            checked={this.state.ingles}
                            onPress={() => this.handleCheckboxes(6)}
                            color="#7c32ff"
                        />
                        <Body>
                            <Text style={styles.materia}>
                                <Icon active name="language"></Icon> | Inglês
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress={() => this.handleCheckboxes(7)}>
                        <CheckBox
                            checked={this.state.historia}
                            onPress={() => this.handleCheckboxes(7)}
                            color="#7c32ff"
                        />
                        <Body>
                            <Text style={styles.materia}>
                                <Icon active name="hourglass"></Icon> | História
                            </Text>
                        </Body>
                    </ListItem>
                    {/*
                    <ListItem onPress={() => this.handleCheckboxes(8)}>
                        <CheckBox
                            checked={this.state.redacao}
                            onPress={() => this.handleCheckboxes(8)}
                            color="#7c32ff"
                        />
                        <Body>
                            <Text style={styles.materia}>
                                <Icon active name="pencil"></Icon> | Redação
                            </Text>
                        </Body>
                    </ListItem>*/}

                    <GradientButton
                        style={{ marginTop: 15, left: "75%" }}
                        textStyle={{ fontSize: 20 }}
                        gradientBegin="#7c32ff"
                        gradientEnd="#c738d8"
                        gradientDirection="diagonal"
                        height={60}
                        width={60}
                        radius={30}
                        impact
                        impactStyle="Light"
                        onPressAction={() => alert("You pressed me!")}
                    >
                        <Icon
                            style={{
                                fontSize: 40,
                                textAlign: "center",
                                color: "white",
                            }}
                            active
                            name="arrow-forward-outline"
                        ></Icon>
                    </GradientButton>
                    <Image
                        source={require("../assets/fundo-login.png")}
                        style={{
                            width: 170,
                            height: 65,
                            transform: [{ scaleX: -1 }],
                            marginTop: -55,
                        }}
                    ></Image>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Lato",
        fontSize: 30,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    continuarBtn: {
        width: 60,
        height: 60,
        left: "44%",
        top: "2%",
        backgroundColor: "transparent",
        borderRadius: 30,
        flex: 0,
    },
    materia: {
        fontFamily: "Lato",
        fontSize: 19,
    },
});
