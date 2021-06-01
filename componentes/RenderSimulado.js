import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
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
    Icon,
} from "native-base";

import { gerarSimulado, atualizarMateriaEstatistica } from "./AcoesRemotas";

import { BlurView } from "expo-blur";

const dims = Dimensions.get("window");

export default class RenderSimulado extends React.Component {
    constructor(props) {
        super(props);

        this.alternativaHandler = this.alternativaHandler.bind(this);
        this.avancarIndice = this.avancarIndice.bind(this);
        this.voltarIndice = this.voltarIndice.bind(this);

        this.state = {
            perguntaTexto: "",
            arquivo:
                "https://studiistcc.000webhostapp.com/insercaodebanco/upload/",
            ano: "",
            resposta: "",
            alternativaSelect: "",
            corretoGif: 0,
            blurIntensity: 0,
            travarAlternativas: false,

            indiceSimulado: 0,
            perguntasSimulado: [],
            alternativasSimulado: [],
        };

        this.indice = 0;
    }

    reloadSimulado() {
        gerarSimulado(
            this.props.route.params.numQuestoes,
            this.props.route.params.materias
        ).then((exercicios) => {
            this.setState({
                perguntasSimulado: exercicios,
                perguntaTexto: exercicios[0]["Pergunta"],
                arquivo:
                    "https://studiistcc.000webhostapp.com/insercaodebanco/upload/" +
                    exercicios[0]["Arquivo"],
                resposta: exercicios[0]["Resposta"],
                ano: exercicios[0]["Ano"],
            });
        });
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

    updateInterno(indice) {
        const exercicio = this.state.perguntasSimulado[indice];
        this.setState({
            perguntaTexto: exercicio["Pergunta"],
            arquivo:
                "https://studiistcc.000webhostapp.com/insercaodebanco/upload/" +
                exercicio["Arquivo"],
            ano: exercicio["Ano"],
            resposta: exercicio["Resposta"],
        });
    }

    componentDidMount() {
        this.reloadSimulado();
    }

    selectAlternativa(alt) {
        if (!this.state.perguntasSimulado[this.indice]["lockAlternativas"]) {
            this.setState({ alternativaSelect: alt });
        }
    }

    verificar() {
        if (this.state.alternativaSelect === "") {
            alert("Selecione uma alternativa antes de corrigir!");
            return;
        }

        if (this.state.alternativaSelect === this.state.resposta) {
            // usuário acertou
            this.setState({ corretoGif: 1 });
            setTimeout(() => this.alternativaHandler(true), 1920);
        } else {
            // usuário errou
            this.setState({ corretoGif: 2 });
            setTimeout(() => this.alternativaHandler(false), 2400);
        }
    }

    alternativaHandler(acerto) {
        this.setState({ corretoGif: 0 });
        atualizarMateriaEstatistica(
            this.props.route.params.materia,
            acerto,
            this.props.userEmail
        );
    }

    avancarIndice() {
        console.log(this.indice);
        this.indice += 1;
        this.setState({
            indiceSimulado: this.indice,
        });
        this.updateInterno(this.indice);
    }

    voltarIndice() {
        this.indice -= 1;
        this.setState({
            indiceSimulado: this.indice,
        });
        this.updateInterno(this.indice);
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
                {this.state.perguntaTexto != "" && (
                    <View style={styles.alternativas}>
                        <ScrollView horizontal={true}>
                            <ListItem style={{ height: 45 }}>
                                <Text style={styles.in}>A </Text>
                                <Radio
                                    selected={
                                        this.state.alternativaSelect == "A"
                                    }
                                    selectedColor={"#7c32ff"}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("A")}
                                />
                            </ListItem>

                            <ListItem style={styles.list}>
                                <Text style={styles.in}>B </Text>
                                <Radio
                                    selected={
                                        this.state.alternativaSelect == "B"
                                    }
                                    selectedColor={"#7c32ff"}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("B")}
                                />
                            </ListItem>

                            <ListItem style={styles.list}>
                                <Text style={styles.in}>C </Text>
                                <Radio
                                    selected={
                                        this.state.alternativaSelect == "C"
                                    }
                                    selectedColor={"#7c32ff"}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("C")}
                                />
                            </ListItem>

                            <ListItem style={styles.list}>
                                <Text style={styles.in}>D </Text>
                                <Radio
                                    selected={
                                        this.state.alternativaSelect == "D"
                                    }
                                    selectedColor={"#7c32ff"}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("D")}
                                />
                            </ListItem>

                            <ListItem style={styles.list}>
                                <Text style={styles.in}>E </Text>
                                <Radio
                                    selected={
                                        this.state.alternativaSelect == "E"
                                    }
                                    selectedColor={"#7c32ff"}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("E")}
                                />
                            </ListItem>
                        </ScrollView>
                        <View style={styles.botoesNavegacao}>
                            {this.state.indiceSimulado ===
                                this.props.route.params.numQuestoes && (
                                <Button
                                    block
                                    style={styles.corrigirBtn}
                                    onPress={this.verificar}
                                >
                                    <Text>Corrigir</Text>
                                </Button>
                            )}
                            {this.state.indiceSimulado > 0 && (
                                <Button
                                    style={[styles.botaoSimulado, { left: 0 }]}
                                    onPress={this.voltarIndice}
                                >
                                    <Icon name="arrow-back-outline"></Icon>
                                </Button>
                            )}
                            {this.state.indiceSimulado <
                                this.props.route.params.numQuestoes && (
                                <Button
                                    style={[styles.botaoSimulado, { right: 0 }]}
                                    onPress={this.avancarIndice}
                                >
                                    <Icon name="arrow-forward-outline"></Icon>
                                </Button>
                            )}
                        </View>
                    </View>
                )}
                {this.state.corretoGif == 1 && (
                    <Image
                        source={require("../assets/certo.gif")}
                        style={styles.gifCentroCorreto}
                        resizeMode="cover"
                    />
                )}
                {this.state.corretoGif == 2 && (
                    <Image
                        source={require("../assets/errado.gif")}
                        style={styles.gifCentroErrado}
                        resizeMode="cover"
                    />
                )}
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
    gifCentroCorreto: {
        position: "absolute",
        width: 250,
        height: 250,
        top: dims.height / 2 - 255,
        left: dims.width / 2 - 125,
    },
    gifCentroErrado: {
        position: "absolute",
        width: dims.width - 60,
        height: dims.width - 60,
        top: dims.height / 2 - 265,
        left: dims.width / 2 - 140,
    },
    botaoSimulado: {
        borderRadius: 0,
        height: 44,
        position: "absolute",
        backgroundColor: "#7c32ff",
        elevation: 0,
        zIndex: 5,
    },
    botoesNavegacao: {
        backgroundColor: "#7c32ff",
        height: 45,
    },
});
