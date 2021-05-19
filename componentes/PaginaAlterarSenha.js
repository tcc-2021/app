import * as React from "react";
import {StyleSheet, ScrollView, Alert} from "react-native";
import {View, Text, Container, Button, Content, Form, Item, Icon, Input} from "native-base";

export default class AlterarSenha extends React.Component {
	constructor(props) {
		super(props);
	}

	confirmacao() {
		Alert.alert("Confirmar", "Sua senha será alterada, tem certeza das modificações?",
		[
			{
				text: "Sim"
			},

			{
				text: "Não"
			},
		]);
	}

	render() {
		return(
			<Container >
				<Content style={{marginTop: "50%", position:"relative"}}>
					<Text style={styles.title}> Alterar a senha</Text>
					<Form>
						<View style={{margin: 20}}>
							<Item>
								<Icon active name="key"/>
								<Input secureTextEntry placeholder="Senha atual"
								onChangeText={(senhaAtual) => (this.senhaAtual = senhaAtual)}/>
							</Item>
							
							<Item>
								<Icon active name="star"/>
								<Input secureTextEntry placeholder="Nova senha"
								onChangeText={(novaSenha) => (this.novaSenha = novaSenha)}/>
							</Item>
							
							<View style={{marginTop: 30}}>
								<Button block success onPress={this.confirmacao.bind(this)}>
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
		padding: 20
	},
});