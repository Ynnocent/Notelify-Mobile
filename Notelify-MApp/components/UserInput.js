import { Button, TextInput, View, StyleSheet } from "react-native";

export default function UserInput() {
    return (
        <View style={styles.textInput}>
            <TextInput placeholder="Add your notes!"></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
      padding: 50,
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "80%",
      marginRight: 8,
      padding: 8,
    },
  });
  