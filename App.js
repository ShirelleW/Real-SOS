import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MessageSend from "./app/MessageSend";
import MessageView from "./app/MessageView";
import FrequencyControl from "./app/FrequencyControl";


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <MessageSend />
      </View>
      <View>
        <FrequencyControl />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
