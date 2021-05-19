import * as React from "react";
import {StyleSheet, ScrollView, TextInput, Image} from "react-native";
import {View, Text, Container, Content, Form, Item, Icon, Input, Label, Button} from "native-base";

export default class AlterarEmail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Container >
				<Content style={{marginTop: "50%", position:"relative"}}>
					<Text style={styles.title}> Alterar e-mail</Text>
					<Form>
						<View style={{margin: 20}}>
							<Item>
								<Icon active name="mail"/>
								<Input placeholder="E-mail atual"/>
							</Item>
							
							<Item>
								<Icon active name="star"/>
								<Input placeholder="Novo e-mail"/>
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