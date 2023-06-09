import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/homeScreen";
import NoteScreen from "./screens/NotesScreen";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Note" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
