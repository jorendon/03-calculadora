import React from "react";
import { CalculadoraScreen } from "./src/screens/CalculadoraScreen";
import { Image, SafeAreaView, StatusBar } from "react-native";
import {styles} from  "./src/theme/appTheme"
import logo from "./public/logo.png"

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle={"light-content"}/>
      <Image
        style={styles.stretch}
        source={logo}
      />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;


