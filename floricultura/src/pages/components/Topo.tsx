import React from "react-native";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from "../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Topo(){
    return <>
    <Image style={estilos.topo} source={topo}/>
    </>
}


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width,
    },
})