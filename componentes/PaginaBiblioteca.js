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
                    <ListItem itemDivider>
                        <Text>Português</Text>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/redacao/texto-escrito.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Texto Escrito</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/portugues/figuras-linguagem.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Figuras de Linguagem</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/gramatica/acentuacao.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Acentuação</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/portugues/o-que-e-sintaxe.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Sintaxe</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/gramatica/substantivo.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Substantivos</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/portugues/o-que-e-adjetivo.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Adjetivos</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/gramatica/adverbio.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Advérbio</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Geografia</Text>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/brasil/problemas-ambientais-sociais-decorrentes-urbanizacao.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Problemas Urbanos</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/brasil/caracteristicas-hidrografia-brasileira.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Hidrografia Brasileira</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/geografia/tipos-relevo.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Relevo</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/brasil/biomas-brasileiros.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Biomas Brasileiros</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/brasil/urbanizacao.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Urbanização</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/geografia/conceitos-populacao.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>População</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/geografia/globalizacao.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Globalização</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>História</Text>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/historia/o-que-e-idade-contemporanea.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Idade Contemporânea</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/historiab/brasil-colonia.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Brasil Colônia</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/historiab/brasil-monarquia.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Brasil Império</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/historiag/revolucao-industrial.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Revolução Industrial</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/historiag/primeira-guerra.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Primeira Guerra Mundial</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/historiag/segunda-guerra-mundial.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Segunda Guerra Mundial</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/historiag/iluminismo.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Iluminismo</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Física</Text>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/fisica/ordem-grandeza.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Ordem de Grandeza</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/fisica/sistema-internacional-unidades-si.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Sistema Internacional</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/fisica/o-que-e-inercia.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Inércia</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/fisica/o-que-e-momento-linear.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Movimento Linear</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/fisica/torque-uma-forca.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Torque</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/fisica/o-que-e-gravidade.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Gravidade</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/fisica/ondas.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Ondas</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/fisica/o-que-e-calor.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Calor</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Química</Text>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/quimica/o-que-e-ligacao-ionica.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Ligação Iônica</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/quimica/o-que-e-ligacao-covalente.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Ligação Covalente</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/quimica/estequiometria-reacoes.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Estequiometria</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/quimica/estrutura-Atomo.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Átomo</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/quimica/transformacoes-gasosas.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Transformações gasosas</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Biologia</Text>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/biologia/nivel-celula.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Estrutura da Célula</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://monografias.brasilescola.uol.com.br/biologia/biotecnologia.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Biotecnologia</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/biologia/genetica.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Genética</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/biologia/hereditariedade.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Hereditariedade</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/historiag/evolucionismo.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Evolução</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/o-que-e/biologia/o-que-e-ecossistema.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Ecossistemas</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/biologia/conceituando-bioma.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Bioma</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://brasilescola.uol.com.br/biologia/virus-2.htm"
                            )
                        }
                    >
                        <Left>
                            <Text>Vírus</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Inglês</Text>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://www.todamateria.com.br/verbos-regulares-e-irregulares-no-ingles/"
                            )
                        }
                    >
                        <Left>
                            <Text>Verbs</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://www.todamateria.com.br/simple-present/"
                            )
                        }
                    >
                        <Left>
                            <Text>Simple Present</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://www.todamateria.com.br/simple-past/"
                            )
                        }
                    >
                        <Left>
                            <Text>Simple Past</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://www.todamateria.com.br/past-continuous/"
                            )
                        }
                    >
                        <Left>
                            <Text>Past Continuous</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://www.todamateria.com.br/present-perfect-simple/"
                            )
                        }
                    >
                        <Left>
                            <Text>Present Perfect</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://www.todamateria.com.br/past-perfect-simple/"
                            )
                        }
                    >
                        <Left>
                            <Text>Past Perfect</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://www.todamateria.com.br/simple-future/"
                            )
                        }
                    >
                        <Left>
                            <Text>Simple Future</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem
                        onPress={() =>
                            Linking.openURL(
                                "https://www.todamateria.com.br/passive-voice/"
                            )
                        }
                    >
                        <Left>
                            <Text>Passive Voice</Text>
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
