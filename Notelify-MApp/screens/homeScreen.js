// HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.textStyle}>Welcome to Notelify</Text>
      <Text style={styles.paragraphStyle}>Try our latest note taking app and be amazed at how easy it is to take notes!</Text>
      <Button title="Go to Note" onPress={() => navigation.navigate("Note")} color={'gold'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "grey",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 30,
  },
  paragraphStyle: {
    color: 'white',
    textAlign: 'center',
    padding: 10
  }
});

export default HomeScreen;
