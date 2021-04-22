import * as React from "react";
import {Text, StyleSheet, View, ScrollView} from "react-native";
import {Container, CardItem, Body} from "native-base";

import IconFooter from "./Footer.js";

import IconHeader from "./CustomHeader.js";

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
			
			<IconHeader>
			</IconHeader>
			
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