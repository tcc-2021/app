import React, { Component } from "react";

import { View, TouchableOpacity, StyleSheet, Text, Dimensions, Image } from "react-native";

{/* tentativa de suportar o máximo de viewports possíveis, provavelmente falha por conta do - 40. rever isso*/}
const ContainerLado = Dimensions.get('window').width / 2 - 40;

class Materias extends Component {
    render() {
        return(
        <View style={{flexGrow: 1, flexDirection: "row", marginTop: -20, marginLeft: 15}}>
            <View style={styles.columnView}>
                <View style={styles.contIndividual}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.imgbio} source={require('../assets/biologia.png')} />
                    </TouchableOpacity>
                    <Text style={styles.legenda}>Biologia</Text>
                </View>
                
                <View style={styles.contIndividual}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.imgbio} source={require('../assets/fisica.png')} />
                    </TouchableOpacity>
                    <Text style={styles.legenda}>Física</Text>
                </View>

                <View style={styles.contIndividual}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.imgbio} source={require('../assets/matematica.png')} />
                    </TouchableOpacity>
                    <Text style={styles.legenda}>Matemática</Text>
                </View>

                <View style={styles.contIndividual}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.imgbio} source={require('../assets/ingles.png')} />
                    </TouchableOpacity>
                    <Text style={styles.legenda}>Inglês</Text>
                </View>
            </View>

            <View style={styles.columnView}>
                <View style={styles.contIndividual}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.imgbio} source={require('../assets/portugues.png')} />
                    </TouchableOpacity>
                    <Text style={styles.legenda}>Português</Text>
                </View>

                <View style={styles.contIndividual}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.imgbio} source={require('../assets/geografia.png')} />
                    </TouchableOpacity>
                    <Text style={styles.legenda}>Geografia</Text>
                </View>

                <View style={styles.contIndividual}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.imgbio} source={require('../assets/quimica.png')} />
                    </TouchableOpacity>
                    <Text style={styles.legenda}>Química</Text>
                </View>

                <View style={styles.contIndividual}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.imgbio} source={require('../assets/historia.png')} />
                    </TouchableOpacity>
                    <Text style={styles.legenda}>História</Text>
                </View>
            </View>
        </View>);
    }
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
      fontSize: 19,
      fontFamily: "Lato",
      color: "#6e4380",
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
      alignSelf: 'center',
    },
    columnView: {
      flex: 1,
      flexDirection: "column"
    }
});

export default Materias;