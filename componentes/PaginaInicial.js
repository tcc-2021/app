import * as React from "react";
import {Text, StyleSheet, View, ScrollView} from "react-native";
import {Container, CardItem, Body} from "native-base";

import IconFooter from "./Footer.js";
import CustomHeader from "./CustomHeader.js";

export default function PaginaInicial() {
	return(
		<Container>
			{/*<CustomHeader>
			</CustomHeader>*/}
			<ScrollView>
			
			</ScrollView>
			<IconFooter> </IconFooter>
		</Container>
	);
}