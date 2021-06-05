import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
} from "react-native";

import { Container, ListItem, Text, Radio, Button, Icon } from "native-base";

import {
    exercicioIndividualRemoto,
    atualizarMateriaEstatistica,
} from "./AcoesRemotas";

const dims = Dimensions.get("window");

export default class RenderExercicio extends React.Component {
    constructor(props) {
        super(props);

        this.corrigirAlternativa = this.corrigirAlternativa.bind(this);
        this.reloadExercicio = this.reloadExercicio.bind(this);
        this.handleZoom = this.handleZoom.bind(this);

        this.state = {
            perguntaTexto: "",
            arquivo: "http://exemplo.com",
            ano: "",
            resposta: "",
            alternativaSelect: "",
            corretoGif: 0,
            questaoImgScale: 1,
        };
    }

    reloadExercicio() {
        // resetar estados internos
        this.setState({
            perguntaTexto: "",
            arquivo:
                "https://studiistcc.000webhostapp.com/insercaodebanco/upload/",
            ano: "",
            resposta: "",
            alternativaSelect: "",
            corretoGif: 0,
            travarAlternativas: false,
        });

        // baixar novo exercício
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
            }
        );
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
        this.reloadExercicio();
    }

    selectAlternativa(alt) {
        if (!this.state.travarAlternativas) {
            this.setState({ alternativaSelect: alt });
        }
    }

    handleZoom() {
        if (this.state.questaoImgScale == 1) {
            this.setState({ questaoImgScale: 1.3 });
        } else {
            this.setState({ questaoImgScale: 1 });
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
            setTimeout(() => this.corrigirAlternativa(true), 1920);
        } else {
            // usuário errou
            this.setState({ corretoGif: 2 });
            setTimeout(() => this.corrigirAlternativa(false), 2400);
        }
    }

    corrigirAlternativa(acerto) {
        this.setState({ corretoGif: 0, travarAlternativas: true });
        atualizarMateriaEstatistica(
            this.props.route.params.materia,
            acerto,
            this.props.userEmail,
            1
        );
        //this.reloadExercicio();
    }

    corAlternativa(alt) {
        if (this.state.travarAlternativas) {
            switch (alt) {
                case "A":
                    if (this.state.resposta === "A") {
                        return "#6AA84F";
                    } else if (this.state.alternativaSelect === "A") {
                        return "#E06666";
                    }
                    break;
                case "B":
                    if (this.state.resposta === "B") {
                        return "#6AA84F";
                    } else if (this.state.alternativaSelect === "B") {
                        return "#E06666";
                    }
                    break;
                case "C":
                    if (this.state.resposta === "C") {
                        return "#6AA84F";
                    } else if (this.state.alternativaSelect === "C") {
                        return "#E06666";
                    }
                    break;
                case "D":
                    if (this.state.resposta === "D") {
                        return "#6AA84F";
                    } else if (this.state.alternativaSelect === "D") {
                        return "#E06666";
                    }
                    break;
                case "E":
                    if (this.state.resposta === "E") {
                        return "#6AA84F";
                    } else if (this.state.alternativaSelect === "E") {
                        return "#E06666";
                    }
                    break;
            }
        }

        return "#7c32ff";
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
                        <TouchableOpacity onPress={this.handleZoom}>
                            <Image
                                resizeMode={"contain"}
                                style={[
                                    styles.questaoImg,
                                    {
                                        transform: [
                                            {
                                                scale: this.state
                                                    .questaoImgScale,
                                            },
                                        ],
                                    },
                                ]}
                                source={{
                                    uri: this.state.arquivo,
                                }}
                            />
                        </TouchableOpacity>
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
                                        this.state.alternativaSelect == "A" ||
                                        (this.state.resposta == "A" &&
                                            this.state.travarAlternativas)
                                    }
                                    selectedColor={this.corAlternativa("A")}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("A")}
                                />
                            </ListItem>

                            <ListItem style={styles.list}>
                                <Text style={styles.in}>B </Text>
                                <Radio
                                    selected={
                                        this.state.alternativaSelect == "B" ||
                                        (this.state.resposta == "B" &&
                                            this.state.travarAlternativas)
                                    }
                                    selectedColor={this.corAlternativa("B")}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("B")}
                                />
                            </ListItem>

                            <ListItem style={styles.list}>
                                <Text style={styles.in}>C </Text>
                                <Radio
                                    selected={
                                        this.state.alternativaSelect == "C" ||
                                        (this.state.resposta == "C" &&
                                            this.state.travarAlternativas)
                                    }
                                    selectedColor={this.corAlternativa("C")}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("C")}
                                />
                            </ListItem>

                            <ListItem style={styles.list}>
                                <Text style={styles.in}>D </Text>
                                <Radio
                                    selected={
                                        this.state.alternativaSelect == "D" ||
                                        (this.state.resposta == "D" &&
                                            this.state.travarAlternativas)
                                    }
                                    selectedColor={this.corAlternativa("D")}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("D")}
                                />
                            </ListItem>

                            <ListItem style={styles.list}>
                                <Text style={styles.in}>E </Text>
                                <Radio
                                    selected={
                                        this.state.alternativaSelect == "E" ||
                                        (this.state.resposta == "E" &&
                                            this.state.travarAlternativas)
                                    }
                                    selectedColor={this.corAlternativa("E")}
                                    color={"#000"}
                                    onPress={() => this.selectAlternativa("E")}
                                />
                            </ListItem>
                        </ScrollView>
                        <View style={styles.botoesFooter}>
                            {!this.state.travarAlternativas && (
                                <Button
                                    block
                                    style={styles.corrigirBtn}
                                    onPress={() => this.verificar()}
                                >
                                    <Text>Corrigir</Text>
                                </Button>
                            )}

                            {this.state.travarAlternativas && (
                                <Button
                                    style={[styles.botaoProx, { right: 0 }]}
                                    onPress={this.reloadExercicio}
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
    botaoProx: {
        zIndex: 6,
        marginTop: 0,
        borderRadius: 0,
        height: 43,
        position: "absolute",
        backgroundColor: "#7c32ff",
        elevation: 0,
    },
    botoesFooter: {
        backgroundColor: "#7c32ff",
        height: 45,
        borderBottomWidth: 1,
        borderColor: "#FFF",
    },
});
