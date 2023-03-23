import { View, Button, StyleSheet } from "react-native";


export default function AddNoteButton() {
    return(
        <View>
            <Button title="Add Note"/>
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