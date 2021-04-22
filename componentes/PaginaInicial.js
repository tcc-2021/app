import * as React from "react";
import {Text, StyleSheet, View, ScrollView} from "react-native";
import {Container, CardItem, Body} from "native-base";

import IconFooter from "./Footer.js";
import CustomHeader from "./CustomHeader.js";
import CardImage from "./CardImage.js";

import CardBio from "./cards/CardBio.js";
import CardFis from "./cards/CardFis.js";
import CardGeo from "./cards/CardGeo.js";
import CardHist from "./cards/CardHist.js";
import CardMat from "./cards/CardMat.js";
import CardPt from "./cards/CardPt.js";
import CardQuim from "./cards/CardQuim.js";

export default function PaginaInicial() {
	return(
		<Container>
			{/*<CustomHeader>
			</CustomHeader>*/}
			<ScrollView>

				<CardBio> </CardBio>
				<CardFis> </CardFis>
				<CardGeo> </CardGeo>
				<CardHist> </CardHist>
				<CardMat> </CardMat>
				<CardPt> </CardPt>
				<CardQuim> </CardQuim>
				
			</ScrollView>
			<IconFooter> </IconFooter>
		</Container>
	);
}