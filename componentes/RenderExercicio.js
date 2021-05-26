import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";

import {
    Container,
    Content,
    ListItem,
    Text,
    Radio,
    Right,
    Left,
    Button,
} from "native-base";

import { exercicioIndividualRemoto } from "./AcoesRemotas";

import { BlurView } from "expo-blur";

export default class RenderExercicio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            perguntaTexto: "",
            arquivo: "",
            ano: "",
            resposta: "",
            alternativaSelect: "",
        };
    }

    formatarMateria() {
        switch (this.props.route.params.materia) {
            case "portugues":
                return "Português";
            case "matematica":
                return "Matemática";
            case "ingles":
                return "Inglês";
            case "biologia":
                return "Biologia";
            case "geografia":
                return "Geografia";
            case "fisica":
                return "Física";
            case "quimica":
                return "Química";
            case "historia":
                return "História";
        }
    }

    componentDidMount() {
        exercicioIndividualRemoto(this.props.route.params.materia).then(
            (exercicio) => {
                this.setState({
                    perguntaTexto: exercicio["Pergunta"],
                    arquivo:
                        "https://studiistcc.000webhostapp.com/insercaodebanco/upload/" +
                        exercicio["Arquivo"],
                    ano: exercicio["Ano"],
                    resposta: exercicio["Resposta"],
                });
                console.log(
                    this.state.arquivo + ", " + this.state.perguntaTexto
                );
            }
        );
    }

    selectAlternativa(alt) {
        this.setState({ alternativaSelect: alt });
    }

    render() {
        return (
            <Container>
                <ScrollView
                    style={{ marginBottom: 70 }}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <Text style={[styles.cimaText, { textAlign: "left" }]}>
                        Ano: {this.state.ano}
                    </Text>
                    <Text
                        style={[
                            styles.cimaText,
                            { textAlign: "right", marginTop: -33 },
                        ]}
                    >
                        Disciplina: {this.formatarMateria()}
                    </Text>
                    {this.state.arquivo !=
                        "https://studiistcc.000webhostapp.com/insercaodebanco/upload/" && (
                        <Image
                            resizeMode={"contain"}
                            style={styles.questaoImg}
                            source={{
                                uri: this.state.arquivo,
                            }}
                        />
                    )}
                    <Text style={styles.questaoTexto}>
                        {this.state.perguntaTexto}
                    </Text>
                </ScrollView>
                <View style={styles.alternativas}>
                    <ScrollView horizontal={true}>
                        <ListItem style={{ height: 45 }}>
                            <Text style={styles.in}>A </Text>
                            <Radio
                                selected={this.state.alternativaSelect == "A"}
                                selectedColor={"#7c32ff"}
                                color={"#000"}
                                onPress={() => this.selectAlternativa("A")}
                            />
                        </ListItem>

                        <ListItem style={styles.list}>
                            <Text style={styles.in}>B </Text>
                            <Radio
                                selected={this.state.alternativaSelect == "B"}
                                selectedColor={"#7c32ff"}
                                color={"#000"}
                                onPress={() => this.selectAlternativa("B")}
                            />
                        </ListItem>

                        <ListItem style={styles.list}>
                            <Text style={styles.in}>C </Text>
                            <Radio
                                selected={this.state.alternativaSelect == "C"}
                                selectedColor={"#7c32ff"}
                                color={"#000"}
                                onPress={() => this.selectAlternativa("C")}
                            />
                        </ListItem>

                        <ListItem style={styles.list}>
                            <Text style={styles.in}>D </Text>
                            <Radio
                                selected={this.state.alternativaSelect == "D"}
                                selectedColor={"#7c32ff"}
                                color={"#000"}
                                onPress={() => this.selectAlternativa("D")}
                            />
                        </ListItem>

                        <ListItem style={styles.list}>
                            <Text style={styles.in}>E </Text>
                            <Radio
                                selected={this.state.alternativaSelect == "E"}
                                selectedColor={"#7c32ff"}
                                color={"#000"}
                                onPress={() => this.selectAlternativa("E")}
                            />
                        </ListItem>
                    </ScrollView>
                    <Button
                        block
                        style={styles.corrigirBtn}
                        onPress={() =>
                            console.log(
                                this.state.alternativaSelect ==
                                    this.state.resposta
                            )
                        }
                    >
                        <Text>Corrigir</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        height: 45,
        marginLeft: -12,
    },
    in: {
        marginLeft: 20,
        fontFamily: "Lato",
    },
    alternativas: {
        position: "absolute",
        width: "100%",
        height: 90,
        bottom: 0,
        backgroundColor: "white",
    },
    absolute: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    cimaText: {
        margin: 15,
        fontFamily: "Lato",
    },
    questaoTexto: {
        margin: 30,
        textAlign: "justify",
        marginTop: 10,
    },
    questaoImg: {
        width: "80%",
        height: 250,
        alignSelf: "center",
        margin: 20,
        marginTop: 10,
    },
    corrigirBtn: {
        borderRadius: 0,
        backgroundColor: "#7c32ff",
        borderBottomWidth: 1,
        borderColor: "#FFF",
    },
});
