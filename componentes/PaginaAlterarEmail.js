import * as React from "react";
import { StyleSheet, ScrollView, TextInput, Image, Alert } from "react-native";
import {
    View,
    Text,
    Container,
    Content,
    Form,
    Item,
    Icon,
    Input,
    Label,
    Button,
} from "native-base";

import { alterarEmailRemoto } from "./AcoesRemotas";

export default class AlterarEmail extends React.Component {
    constructor(props) {
        super(props);
    }

    confirmacao() {
        Alert.alert(
            "Confirmar",
            "Seu e-mail será alterado, tem certeza das modificações?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: () => {
                        const re =
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                        if (this.emailNovo != "" && re.test(this.emailNovo)) {
                            alterarEmailRemoto(
                                this.props.route.params.handler,
                                this.emailAtual,
                                this.emailNovo
                            );
                        } else {
                            alert("Verifique seus dados.");
                        }
                    },
                },
            ]
        );
    }

    render() {
        return (
            <Container>
                <Content style={{ marginTop: 30, position: "relative" }}>
                    <Text style={styles.title}> Alterar e-mail</Text>
                    <Form>
                        <View style={{ margin: 20 }}>
                            <Item>
                                <Icon active name="mail" />
                                <Input
                                    placeholder="E-mail atual"
                                    onChangeText={(emailAtual) =>
                                        (this.emailAtual = emailAtual)
                                    }
                                />
                            </Item>

                            <Item>
                                <Icon active name="star" />
                                <Input
                                    placeholder="Novo e-mail"
                                    onChangeText={(emailNovo) =>
                                        (this.emailNovo = emailNovo)
                                    }
                                />
                            </Item>

                            <View style={{ marginTop: 30 }}>
                                <Button
                                    block
                                    success
                                    onPress={this.confirmacao.bind(this)}
                                >
                                    <Text> Confirmar </Text>
                                </Button>
                            </View>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Lato",
        fontSize: 25,
        textAlign: "center",
        padding: 20,
    },
});
