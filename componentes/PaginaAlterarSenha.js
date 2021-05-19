import * as React from "react";
import {StyleSheet, ScrollView} from "react-native";
import {View, Text, Container, Button, Content, Form, Item, Icon, Input} from "native-base";

export default class AlterarSenha extends React.Component {
	constructor(props) {
		super(props);
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
								<Input secureTextEntry placeholder="Senha atual"/>
							</Item>
							
							<Item>
								<Icon active name="star"/>
								<Input secureTextEntry placeholder="Nova senha"/>
							</Item>
							
							<View style={{marginTop: 30}}>
								<Button block success>
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