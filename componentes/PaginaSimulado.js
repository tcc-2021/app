import React, { Component } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Container, ListItem, CheckBox, Text, Body, Icon } from "native-base";

import GradientButton from "react-native-gradient-buttons";
import Slider from "@react-native-community/slider";

export default class PaginaSimulado extends Component {
    constructor(props) {
        super(props);
        this.handleCheckboxes = this.handleCheckboxes.bind(this);
        this.materiasSelecionadasComoArray =
            this.materiasSelecionadasComoArray.bind(this);
        // Mantém o estado das checkboxes selecionadas
        this.state = {
            portugues: true,
            matematica: true,
            biologia: true,
            geografia: true,
            fisica: true,
            quimica: true,
            ingles: true,
            historia: true,
            numQuestoes: 20,
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
        }
    }

    materiasSelecionadasComoArray() {
        let materias = [];

        if (this.state.portugues) {
            materias.push("portugues");
        }
        if (this.state.matematica) {
            materias.push("matematica");
        }
        if (this.state.biologia) {
            materias.push("biologia");
        }
        if (this.state.geografia) {
            materias.push("geografia");
        }
        if (this.state.fisica) {
            materias.push("fisica");
        }
        if (this.state.quimica) {
            materias.push("quimica");
        }
        if (this.state.ingles) {
            materias.push("ingles");
        }
        if (this.state.historia) {
            materias.push("historia");
        }

        return materias;
    }

    render() {
        return (
            <Container>
                <ScrollView
                    //style={{ marginTop: 13 }}
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

                    <Slider
                        style={{ width: "100%", height: 60 }}
                        minimumValue={10}
                        maximumValue={90}
                        step={5}
                        minimumTrackTintColor="#333"
                        maximumTrackTintColor="#333"
                        thumbTintColor="#7c32ff"
                        value={20}
                        onValueChange={(value) =>
                            this.setState({ numQuestoes: value })
                        }
                    />

                    <Text style={styles.displayNumQuestoes}>
                        Número de questões no simulado: {this.state.numQuestoes}
                    </Text>

                    <GradientButton
                        style={styles.continuarBtn}
                        gradientBegin="#7c32ff"
                        gradientEnd="#c738d8"
                        gradientDirection="diagonal"
                        height={60}
                        width={60}
                        radius={30}
                        impact
                        impactStyle="Light"
                        onPressAction={() =>
                            this.props.navigation.navigate("RenderSimulado", {
                                numQuestoes: this.state.numQuestoes,
                                materias: this.materiasSelecionadasComoArray(),
                            })
                        }
                    >
                        <Icon
                            style={styles.botaoTxtContinuar}
                            active
                            name="arrow-forward-outline"
                        ></Icon>
                    </GradientButton>
                    <Image
                        source={require("../assets/fundo-login.png")}
                        style={styles.imagemPretensiosa}
                    ></Image>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Lato",
        fontSize: 25,
        textAlign: "center",
        //marginTop: 20,
        //marginBottom: 20,
        padding: 11,
    },
    continuarBtn: {
        marginTop: 0,
        left: "75%",
        marginBottom: 30,
    },
    materia: {
        fontFamily: "Lato",
        fontSize: 19,
    },
    displayNumQuestoes: {
        fontFamily: "Lato",
        fontSize: 25,
        textAlign: "center",
    },
    imagemPretensiosa: {
        width: 192,
        height: 75,
        transform: [{ scaleX: -1 }],
        position: "absolute",
        bottom: 0,
    },
    botaoTxtContinuar: {
        fontSize: 40,
        textAlign: "center",
        color: "white",
    },
});
