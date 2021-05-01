import * as React from "react";
import {StyleSheet, ScrollView} from "react-native";
import {View} from "native-base";

import IconFooter from "./Footer.js";

import IconHeader from "./IconHeader.js";

import Materias from "./Materias.js";

export default function PaginaInicial() {
	return(
		<View>
			<IconHeader></IconHeader>
				<ScrollView style={styles.scrollView}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}>
					<Materias></Materias>
				</ScrollView>
			<IconFooter></IconFooter>
		</View>
	);
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
	height: '80%',
    alignSelf: 'center',
  },
});
