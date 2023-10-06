import React from "react";
import { View, Image ,Text, StyleSheet, TouchableOpacity} from "react-native";
import logo from "../../../assets/logo.png";

type props ={
    slogan: string,
    descricao: string,
}

export default function Detalhes({slogan, descricao}: props){
   return <>
         <Image style={estilos.logo} source={logo}/>
        <Text style={estilos.text1}>{slogan}</Text>
        <Text style={estilos.text2}>{descricao}</Text>
    </>
}

const estilos = StyleSheet.create({

    titulo: {
        width: "100%",
        position: "absolute", 
        color: "black",
        textAlign: "center",
        fontSize: 30,
        lineHeight: 26,
        padding: 26,
        fontFamily: "SatisfyRegular"
      },
    
    inicio: {
        flexDirection:"row",
        paddingVertical: 12
      },
    
    text1:{
      fontSize: 17,
      lineHeight: 26,
      padding: 26,
      fontFamily: "SatisfyRegular"
    },

    logo: {
        width:52,
        height:52
        },

    text2: {
            color: "#A3A3A3",
            fontFamily: "SatisfyRegular"
          },
      
})