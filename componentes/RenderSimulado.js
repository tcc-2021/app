import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    Alert,
} from "react-native";

import { Container, ListItem, Text, Radio, Button, Icon } from "native-base";

import { gerarSimulado, simuladoAtualizarEstatisticas } from "./AcoesRemotas";

import { PieChart } from "react-native-chart-kit";
import GradientButton from "react-native-gradient-buttons";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16,
    },
};

export default class RenderSimulado extends React.Component {
    constructor(props) {
        super(props);

        this.avancarIndice = this.avancarIndice.bind(this);
        this.voltarIndice = this.voltarIndice.bind(this);
        this.verificar = this.verificar.bind(this);
        this.corrigirAlternativas = this.corrigirAlternativas.bind(this);
        this.continuarParaPosSimulado =
            this.continuarParaPosSimulado.bind(this);
        this.handleZoom = this.handleZoom.bind(this);

        this.state = {
            perguntaTexto: "",
            arquivo:
                "https://studiistcc.000webhostapp.com/insercaodebanco/upload/",
            ano: "",
            resposta: "",
            materia: "",
            alternativaSelect: "",
            travarAlternativas: false,

            indiceSimulado: 0,
            posSimulado: false,
            perguntasSimulado: [],
            respostasSimuladoState: Array(
                this.props.route.params.numQuestoes
            ).fill(""),
            questaoImgScale: 1,
        };

        this.respostasSimulado = Array(
            this.props.route.params.numQuestoes
        ).fill("");
        this.indice = 0;

        this.posSimuladoDados = [
            {
                name: "Erros",
                number: 8,
                color: "#F16459",
                legendFontColor: "#7F7F7F",
                legendFontSize: 17,
            },
            {
                name: "Acertos",
                number: 2,
                color: "#DE9D98",
                legendFontColor: "#7F7F7F",
                legendFontSize: 17,
            },
        ];
    }

    componentDidMount() {
        this.reloadSimulado();
    }

    reloadSimulado() {
        gerarSimulado(
            this.props.route.params.numQuestoes,
            this.props.route.params.materias
        ).then((exercicios) => {
            // necessário por conta de problemas com concorrência
            this.setState({
                perguntasSimulado: exercicios,
                perguntaTexto: exercicios[0]["Pergunta"],
                arquivo:
                    "https://studiistcc.000webhostapp.com/insercaodebanco/upload/" +
                    exercicios[0]["Arquivo"],
                resposta: exercicios[0]["Resposta"],
                ano: exercicios[0]["Ano"],
                materia: exercicios[0]["Materia"],
            });
        });
    }

    formatarMateria() {
        switch (this.state.materia) {
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
            materia: exercicio["Materia"],
        });
    }

    selectAlternativa(alt) {
        if (!this.state.travarAlternativas) {
            this.respostasSimulado[this.indice] = alt;
            this.setState({
                alternativaSelect: alt,
                respostasSimuladoState: this.respostasSimulado,
            });
        }
    }

    verificar() {
        Alert.alert(
            "Confirmar",
            "Tem certeza que deseja corrigir o simulado?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: this.corrigirAlternativas,
                },
            ]
        );
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

    corrigirAlternativas() {
        this.setState({
            travarAlternativas: true,
        });

        const arr = simuladoAtualizarEstatisticas(
            this.state.perguntasSimulado,
            this.respostasSimulado,
            this.props.userEmail
        );

        this.posSimuladoDados = [
            {
                name: "Erros",
                number: arr[1],
                color: "#F16459",
                legendFontColor: "#7F7F7F",
                legendFontSize: 17,
            },
            {
                name: "Acertos",
                number: arr[0],
                color: "#DE9D98",
                legendFontColor: "#7F7F7F",
                legendFontSize: 17,
            },
        ];
    }

    continuarParaPosSimulado() {
        this.setState({
            posSimulado: true,
        });
    }

    respostasCompletas() {
        for (let i = 0; i < this.state.respostasSimuladoState.length; i++) {
            if (this.state.respostasSimuladoState[i] == "") {
                return false;
            }
        }
        return true;
    }

    avancarIndice() {
        this.respostasSimulado[this.indice] = this.state.alternativaSelect;
        this.indice += 1;
        this.setState({
            indiceSimulado: this.indice,
            alternativaSelect: this.respostasSimulado[this.indice],
            respostasSimuladoState: this.respostasSimulado,
        });
        this.updateInterno(this.indice);
    }

    voltarIndice() {
        this.indice -= 1;
        this.setState({
            indiceSimulado: this.indice,
            alternativaSelect: this.respostasSimulado[this.indice],
            respostasSimuladoState: this.respostasSimulado,
        });
        this.updateInterno(this.indice);
    }

    handleZoom() {
        if (this.state.questaoImgScale == 1) {
            this.setState({ questaoImgScale: 1.3 });
        } else {
            this.setState({ questaoImgScale: 1 });
        }
    }

    render() {
        return (
            <Container>
                {!this.state.posSimulado && (
                    <View>
                        <ScrollView
                            style={{ marginBottom: 70 }}
                            contentContainerStyle={{ flexGrow: 1 }}
                        >
                            <Text
                                style={[styles.cimaText, { textAlign: "left" }]}
                            >
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
                    </View>
                )}
                {/* Necessário ficar fora do view acima porque Views absolutos em react native ainda são relativos à mãe em um certo grau */}
                {!this.state.posSimulado && this.state.perguntaTexto != "" && (
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
                        <View style={styles.botoesNavegacao}>
                            {this.respostasCompletas() &&
                                !this.state.travarAlternativas && (
                                    <Button
                                        block
                                        style={styles.corrigirBtn}
                                        onPress={this.verificar}
                                    >
                                        <Text>Enviar Simulado</Text>
                                    </Button>
                                )}
                            {this.state.travarAlternativas && (
                                <Button
                                    block
                                    style={styles.corrigirBtn}
                                    onPress={this.continuarParaPosSimulado}
                                >
                                    <Text>Continuar</Text>
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
                                this.props.route.params.numQuestoes - 1 && (
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
                {this.state.posSimulado && (
                    <View>
                        <Text style={styles.atividadeTitulo}>Pós-simulado</Text>
                        <Text
                            style={[
                                styles.atividadeTitulo,
                                { marginTop: "25%" },
                            ]}
                        >
                            Dados do simulado
                        </Text>
                        <PieChart
                            data={this.posSimuladoDados}
                            width={screenWidth}
                            height={220}
                            chartConfig={chartConfig}
                            accessor={"number"}
                            backgroundColor={"transparent"}
                            paddingLeft={"10"}
                            center={[10, 0]}
                            absolute
                        />
                        <GradientButton
                            style={styles.botaoRetornar}
                            gradientBegin="#7c32ff"
                            gradientEnd="#c738d8"
                            gradientDirection="diagonal"
                            height={60}
                            width={60}
                            radius={30}
                            impact
                            impactStyle="Light"
                            onPressAction={() =>
                                this.props.navigation.navigate("Simulado")
                            }
                        >
                            <Icon
                                style={styles.botaoRetornarTxt}
                                active
                                name="arrow-forward-outline"
                            ></Icon>
                        </GradientButton>
                    </View>
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
        flex: 0,
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
        margin: 25,
        marginTop: 30,
    },
    corrigirBtn: {
        borderRadius: 0,
        backgroundColor: "#7c32ff",
        height: 43,
        elevation: -1,
    },
    botaoSimulado: {
        borderRadius: 0,
        height: 43,
        position: "absolute",
        backgroundColor: "#7c32ff",
        zIndex: 5,
        shadowOpacity: 0,
        elevation: 0,
    },
    botoesNavegacao: {
        backgroundColor: "#7c32ff",
        height: 44,
        borderBottomWidth: 1,
        borderColor: "#FFF",
    },
    atividadeTitulo: {
        fontFamily: "Lato",
        fontSize: 25,
        textAlign: "center",
        marginTop: 20,
    },
    botaoRetornar: {
        marginLeft: "77%",
        marginTop: "20%",
    },
    botaoRetornarTxt: {
        fontSize: 40,
        textAlign: "center",
        color: "white",
    },
});
