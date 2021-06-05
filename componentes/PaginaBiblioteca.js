import React, { useEffect } from "react";
import { StyleSheet, View, Linking } from "react-native";

import { Content, List, ListItem, Text, Icon, Left, Right } from "native-base";

import { useFocusEffect } from "@react-navigation/native";

export default function PaginaBiblioteca(props) {
    return (
        <View style={styles.container}>
            <Content>
                <List>
                    <ListItem itemDivider>
                        <Text>Matemática</Text>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/matematica/operacoes-com-conjuntos.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Operações em conjuntos numéricos</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/matematica/multiplicacao-com-fracao.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Operações em frações</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/matematica/fatoracao-expressao-algebrica.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Fatoração</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/matematica/criterios-divisibilidade.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Divisibilidade</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/matematica/o-que-e-poligono.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>
                                Características de figuras geométricas planas
                            </Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/fisica/o-que-e-grandeza.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Grandezas</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/matematica/area-solidos-geometricos.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Áreas e volumes</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/matematica/teorema-tales.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Teorema de Tales</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/matematica/moda-media-mediana.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Moda, média e mediana</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/matematica/medidas-dispersao-variancia-desvio-padrao.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Variância e desvio</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/matematica/funcoes.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Gráficos e funções</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 22,
    },
});
