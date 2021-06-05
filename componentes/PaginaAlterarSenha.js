import * as React from "react";
import { StyleSheet, Alert } from "react-native";
import {
    View,
    Text,
    Container,
    Button,
    Content,
    Form,
    Item,
    Icon,
    Input,
} from "native-base";

import { alterarSenhaRemoto } from "./AcoesRemotas";

export default class AlterarSenha extends React.Component {
    constructor(props) {
        super(props);
    }

    confirmacao() {
        Alert.alert(
            "Confirmar",
            "Sua senha será alterada, tem certeza das modificações?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: () => {
                        if (this.senhaNova != "") {
                            alterarSenhaRemoto(
                                this.props.route.params.email,
                                this.senhaAtual,
                                this.senhaNova
                            ).then((alterado) => {
                                if (alterado == 0) {
                                    alert("Senha alterada com sucesso!");
                                    this.props.navigation.navigate("Perfil");
                                } else if (alterado == 1) {
                                    alert(
                                        "Ocorreu um erro durante a alteração de senha. Tente novamente mais tarde."
                                    );
                                } else {
                                    alert(
                                        "A senha atual inserida está errada. Verifique seus dados."
                                    );
                                }
                            });
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
                    <Text style={styles.title}> Alterar a senha</Text>
                    <Form>
                        <View style={{ margin: 20 }}>
                            <Item>
                                <Icon active name="key" />
                                <Input
                                    secureTextEntry
                                    placeholder="Senha atual"
                                    onChangeText={(senhaAtual) =>
                                        (this.senhaAtual = senhaAtual)
                                    }
                                />
                            </Item>

                            <Item>
                                <Icon active name="star" />
                                <Input
                                    secureTextEntry
                                    placeholder="Nova senha"
                                    onChangeText={(senhaNova) =>
                                        (this.senhaNova = senhaNova)
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
