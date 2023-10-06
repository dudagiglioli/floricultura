import React from "react-native";
import {  StyleSheet,  View } from "react-native";
import floricultura from "../mocks/floricultura";
import Detalhes from "./components/detalhes";
import Topo from "./components/topo";


export default function Avaliacao() {
  return (
    <>
      <Topo/>
      <View style={estilos.inicio}>
        <Detalhes
        slogan={floricultura.texto1.slogan}
        descricao={floricultura.texto2.descricao}
        />

              </View>
    </>
  );
}

const estilos = StyleSheet.create({

    
    inicio: {
        flexDirection:"row",
        paddingVertical: 12
      },
      
})