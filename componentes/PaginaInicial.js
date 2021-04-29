import * as React from "react";
import {Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {Container} from "native-base";

import IconFooter from "./Footer.js";

import IconHeader from "./IconHeader.js";

const ContainerLado = 110;
export default function PaginaInicial() {
	return(
		<Container>
			
			<IconHeader></IconHeader>

			<Container style={[styles.contIndividual, {top: -15}]}>
      			<TouchableOpacity style={styles.btn}>
        			<Image style={styles.imgbio} source={require('../assets/biologia.png')} />
      			</TouchableOpacity>
      			<Text style={styles.legenda}>Ser amiga do</Text>
    		</Container>
			
			<Container style={[styles.contIndividual, {top: 150}]}>
      			<TouchableOpacity style={styles.btn}>
        			<Image style={styles.imgbio} source={require('../assets/fisica.png')} />
      			</TouchableOpacity>
      			<Text style={styles.legenda}>mc gh é que nem</Text>
    		</Container>			

			<Container style={[styles.contIndividual, {left: "37%", top: -15}]}>
      			<TouchableOpacity style={styles.btn}>
        			<Image style={styles.imgbio} source={require('../assets/portugues.png')} />
      			</TouchableOpacity>
      			<Text style={styles.legenda}>Português</Text>
    		</Container>

			<Container style={[styles.contIndividual, {left: "37%", top: 150}]}>
      			<TouchableOpacity style={styles.btn}>
        			<Image style={styles.imgbio} source={require('../assets/geografia.png')} />
      			</TouchableOpacity>
      			<Text style={styles.legenda}>Geografia</Text>
    		</Container>

			<Container style={[styles.contIndividual, {left: "37%", top: 310}]}>
      			<TouchableOpacity style={styles.btn}>
        			<Image style={styles.imgbio} source={require('../assets/quimica.png')} />
      			</TouchableOpacity>
      			<Text style={styles.legenda}>ficar 10 horas de pé,</Text>
    		</Container>

			<Container style={[styles.contIndividual, {left: "68%", top: -15}]}>
      			<TouchableOpacity style={styles.btn}>
        			<Image style={styles.imgbio} source={require('../assets/matematica.png')} />
      			</TouchableOpacity>
      			<Text style={styles.legenda}>chega uma hora q vc senta</Text>
    		</Container>

			<Container style={[styles.contIndividual, {left: "68%", top: 170}]}>
      			<TouchableOpacity style={styles.btn}>
        			<Image style={styles.imgbio} source={require('../assets/historia.png')} />
      			</TouchableOpacity>
      			<Text style={styles.legenda}>História</Text>
    		</Container>

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
    left: 0
  },
  legenda: {
    position: "relative",
    top: 10,
    textAlign: "center",
    fontSize: 17,
    color: "purple",
    flex: 1,
    left: 0,
  },
  contIndividual: {
	position: "absolute", 
	flex: 1, 
	left: "5%",
	marginTop: 100,
	textAlign: 'center', 
	width: ContainerLado,
  },
});
