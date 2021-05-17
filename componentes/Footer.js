import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Footer,
    FooterTab,
    Body,
    Left,
    Right,
    Icon,
    Text,
} from "native-base";

import * as RootNavigation from "./RootNavigation";

import temas from "../temas-native-base/Tema.js";

export default class IconFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false,
        };
    }
    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,
        });
        RootNavigation.navigate("Exercicios");
    }
    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
            tab3: false,
            tab4: false,
        });
        RootNavigation.navigate("Biblioteca");
    }
    toggleTab3() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false,
        });
        RootNavigation.navigate("Simulado");
    }
    toggleTab4() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: true,
        });
        RootNavigation.navigate("Perfil");
    }
    render() {
        return (
            <View>
                <Content padder />

                <Footer>
                    <FooterTab
                        theme={temas}
                        style={{ backgroundColor: "#7c32ff" }}
                    >
                        <Button
                            active={this.state.tab1}
                            onPress={() => this.toggleTab1()}
                            style={{ backgroundColor: "#7c32ff" }}
                            vertical
                        >
                            <Icon active={this.state.tab1} name="book" />
                            <Text style={{ fontSize: 10 }}>Exercícios</Text>
                        </Button>
                        <Button
                            active={this.state.tab2}
                            onPress={() => this.toggleTab2()}
                            style={{ backgroundColor: "#7c32ff" }}
                            vertical
                        >
                            <Icon active={this.state.tab2} name="library" />
                            <Text style={{ fontSize: 10 }}>Biblioteca</Text>
                        </Button>
                        <Button
                            active={this.state.tab3}
                            onPress={() => this.toggleTab3()}
                            style={{ backgroundColor: "#7c32ff" }}
                            vertical
                        >
                            <Icon active={this.state.tab3} name="trending-up" />
                            <Text style={{ fontSize: 10 }}>Simulado</Text>
                        </Button>
                        <Button
                            active={this.state.tab4}
                            onPress={() => this.toggleTab4()}
                            style={{ backgroundColor: "#7c32ff" }}
                            vertical
                        >
                            <Icon
                                active={this.state.tab4}
                                name="person-circle-outline"
                            />
                            <Text style={{ fontSize: 10 }}>Perfil</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}
