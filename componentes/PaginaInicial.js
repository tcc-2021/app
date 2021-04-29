 import * as React from "react";
import {Text, StyleSheet, TouchableOpacity, Image, ScrollView} from "react-native";
import {Container, Right, View} from "native-base";

import IconFooter from "./Footer.js";

import IconHeader from "./IconHeader.js";

const ContainerLado = 140;
export default function PaginaInicial() {
	return(
		<Container>
			
			<IconHeader></IconHeader>
			<View>
				<ScrollView contentContainerStyle={{flex: 1, flexDirection: "row", marginTop: -20, marginLeft: 10}} style={styles.scrollView}>
					<Container style={{flex: 1, flexDirection: "column"}}>
						<Container style={styles.contIndividual}>
							<TouchableOpacity style={styles.btn}>
								<Image style={styles.imgbio} source={require('../assets/biologia.png')} />
							</TouchableOpacity>
							<Text style={styles.legenda}>Biologia</Text>
						</Container>
						
						
						<Container style={styles.contIndividual}>
							<TouchableOpacity style={styles.btn}>
								<Image style={styles.imgbio} source={require('../assets/fisica.png')} />
							</TouchableOpacity>
							<Text style={styles.legenda}>Física</Text>
						</Container>

						<Container style={styles.contIndividual}>
							<TouchableOpacity style={styles.btn}>
								<Image style={styles.imgbio} source={require('../assets/matematica.png')} />
							</TouchableOpacity>
							<Text style={styles.legenda}>Matemática</Text>
						</Container>
					</Container>

					<Container style={{flex: 1, flexDirection: "column"}}>
						<Container style={styles.contIndividual}>
							<TouchableOpacity style={styles.btn}>
								<Image style={styles.imgbio} source={require('../assets/portugues.png')} />
							</TouchableOpacity>
							<Text style={styles.legenda}>Português</Text>
						</Container>

						<Container style={styles.contIndividual}>
							<TouchableOpacity style={styles.btn}>
								<Image style={styles.imgbio} source={require('../assets/geografia.png')} />
							</TouchableOpacity>
							<Text style={styles.legenda}>Geografia</Text>
						</Container>

						<Container style={styles.contIndividual}>
							<TouchableOpacity style={styles.btn}>
								<Image style={styles.imgbio} source={require('../assets/quimica.png')} />
							</TouchableOpacity>
							<Text style={styles.legenda}>Química</Text>
						</Container>

						<Container style={styles.contIndividual}>
							<TouchableOpacity style={styles.btn}>
								<Image style={styles.imgbio} source={require('../assets/historia.png')} />
							</TouchableOpacity>
							<Text style={styles.legenda}>História</Text>
						</Container>
					</Container>
				</ScrollView>
			</View>

			<IconFooter></IconFooter>
		</Container>
	);
}

const styles = StyleSheet.create({
  imgbio: {
    width: ContainerLado / 2,
    height: ContainerLado / 2 + 14,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: ContainerLado,
    height: ContainerLado,
    backgroundColor: '#FFF',
    borderRadius: ContainerLado / 2,
    left: 0,
  },
  legenda: {
    position: "relative",
    top: 10,
    textAlign: "center",
    fontSize: 17,
    color: "purple",
    left: 0,
  },
  contIndividual: {
	position: "relative",
	left: "5%",
	textAlign: 'center', 
	width: ContainerLado,
	flex: 0,
	marginTop: 40,
	height: 180,
  },
  scrollView: {
    width: '100%',
	height: '80%',
    margin: 0,
    alignSelf: 'center',
    padding: 0,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue',
  },
});
