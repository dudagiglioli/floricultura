import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Avaliacao from "./src/pages";
import { useFonts,
  Satisfy_400Regular
} from '@expo-google-fonts/satisfy';

export default function App() {

const[fonteCarregada] = useFonts({
  "SatisfyRegular" : Satisfy_400Regular
})
  if(!fonteCarregada){
    return null
  }

  return (
  <SafeAreaView>
<StatusBar/>
<Avaliacao/>
  </SafeAreaView>
    );}