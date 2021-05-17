import React, { useState } from "react";
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Linking,
} from "react-native";

import { Icon, Content } from "native-base";

import { SwipeListView } from "react-native-swipe-list-view";
import { PieChart } from "react-native-chart-kit";

const rowSwipeAnimatedValues = {};
Array(30)
    .fill("")
    .forEach((_, i) => {
        rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });

export default function PaginaBiblioteca() {
    ////const listData = require("./Biblioteca.json")["matematica"];
    const listData = require("./Biblioteca.json");
    console.log(listData);

    const onRowDidOpen = (rowKey) => {
        console.log("This row opened", rowKey);
    };

    const onSwipeValueChange = (swipeData) => {
        const { key, value } = swipeData;
        rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    const renderItem = (data) => (
        <TouchableHighlight style={styles.rowFront} underlayColor={"#AAA"}>
            <View>
                <Text style={{ color: "black" }}>{data.item.text}</Text>
            </View>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => Linking.openURL(data.item.url)}
            >
                <Animated.View
                    style={[
                        styles.trash,
                        {
                            transform: [
                                {
                                    scale: rowSwipeAnimatedValues[
                                        data.item.key
                                    ].interpolate({
                                        inputRange: [25, 70],
                                        outputRange: [0, 1],
                                        extrapolate: "clamp",
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Icon name="information-circle-outline"></Icon>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );

    const renderSectionHeader = ({ section }) => (
        <Text style={styles.secHeader}>{section.title}</Text>
    );

    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontFamily: "Lato",
                    fontSize: 27,
                    textAlign: "center",
                    marginTop: 30,
                }}
            >
                Biblioteca
            </Text>
            <SwipeListView
                useSectionList
                sections={listData}
                disableRightSwipe={true}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                renderSectionHeader={renderSectionHeader}
                rightOpenValue={-75}
                previewRowKey={"0"}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
                onSwipeValueChange={onSwipeValueChange}
                showsVerticalScrollIndicator={false}
                style={{ margin: 12, marginTop: 22, backgroundColor: "#FFF" }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    backTextWhite: {
        color: "#FFF",
    },
    rowFront: {
        // alignItems: "center",
        backgroundColor: "#FFF",
        borderBottomColor: "#c738d8",
        borderBottomWidth: 1,
        justifyContent: "center",
        height: 50,
    },
    rowBack: {
        // alignItems: "center",
        backgroundColor: "#FFF",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: "#FFF",
        right: 0,
    },
    secHeader: {
        fontSize: 20,
        fontFamily: "Lato",
        marginLeft: 10,
        marginTop: 25,
    },
});
